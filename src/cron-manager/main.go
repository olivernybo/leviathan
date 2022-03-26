package main

import (
	"cron-manager/cron"
	"cron-manager/broadcaster"
	"cron-manager/api"
)

func main() {
	// make jobs and results channels
	jobs := make(chan cron.Job)
	results := make(chan cron.Job)

	cron.Initialize(jobs, results)
	broadcaster.Initialize(results)
	api.Initialize(jobs, results)
}