package cron

import cron "cron-manager/cron/models"

// Initializes the worker threads
func Initialize(jobs <-chan cron.Job, results chan<- cron.Job) {
	for i := 0; i < 4; i++ {
		go Worker(jobs, results)
	}
}