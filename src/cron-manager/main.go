package main

import (
	"cron-manager/cron"
	models "cron-manager/cron/models"
	"cron-manager/broadcaster"
	"cron-manager/api"
)

func main() {
	// make jobs and results channels
	jobs := make(chan models.Job)
	results := make(chan models.Job)

	cron.Initialize(jobs, results)
	broadcaster.Initialize(results)
	api.Initialize(jobs, results)
}