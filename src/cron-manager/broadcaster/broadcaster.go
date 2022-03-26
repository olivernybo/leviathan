package broadcaster

import (
	"fmt"
	"cron-manager/cron"
)

// Initialize the broadcaster (results channel)
func Initialize(results <-chan cron.Job) {
	go func() {
		for job := range results {
			fmt.Println("broadcaster: received result", job.Output)
		}
	}()
}