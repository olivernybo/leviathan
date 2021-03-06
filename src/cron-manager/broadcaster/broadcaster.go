package broadcaster

import (
	"fmt"
	"cron-manager/cron/models"
)

// Initialize the broadcaster (results channel)
func Initialize(results <-chan cron.Job) {
	go func() {
		for job := range results {
			fmt.Println("broadcaster received result and output:", job.Result, job.Output, job.Error)
		}
	}()
}