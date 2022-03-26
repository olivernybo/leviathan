package cron

import (
	"bytes"
	"fmt"
	"os/exec"
	"strings"
)

func Worker(jobs <-chan Job, results chan<- Job) {
	for job := range jobs {
		fmt.Println("worker: received job", job)

		args := strings.Split(job.Command, " ")
		cmd := exec.Command(args[0], args[1:]...)

		var out bytes.Buffer
		cmd.Stdout = &out

		err := cmd.Run()
		if err != nil {
			fmt.Println("worker: error running command")
			job.Result = err.Error() + "\n"
		}

		job.Result += out.String()

		results <- job
	}
}