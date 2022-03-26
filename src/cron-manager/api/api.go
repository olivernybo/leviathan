package api

import (
	"cron-manager/cron"
	"net/http"
)

var JOBS chan<- cron.Job
var RESULTS <-chan cron.Job

// Initialize the API on port 8090
func Initialize(jobs chan<- cron.Job, results <-chan cron.Job) {
	JOBS = jobs
	RESULTS = results

	http.HandleFunc("/newJob", NewJob)

	http.ListenAndServe(":8090", nil)
}