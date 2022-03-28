package cron

import (
	"bytes"
	"fmt"
	"os/exec"
	"strings"
	"cron-manager/cron/models"
)

// Worker that runs the cron job
func Worker(jobs <-chan cron.Job, results chan<- cron.Job) {
	// Continuously read jobs from the jobs channel
	for job := range jobs {
		fmt.Println("worker: received job", job)

		// Split the command into an array of strings (command and arguments)
		args := strings.Split(job.Command, " ")
		cmd := exec.Command(args[0], args[1:]...)

		// Create a buffer to capture the output
		var out bytes.Buffer
		cmd.Stdout = &out

		// Run the command
		err := cmd.Run()
		if err != nil {
			fmt.Println("worker: error running command")
			job.Error = err.Error()
			job.Result = cron.Failure
		} else {
			job.Result = cron.Success
		}

		job.Output = out.String()

		results <- job
	}
}