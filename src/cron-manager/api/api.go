package api

import (
	"cron-manager/cron"
	"net/http"
)

// Global variables
var JOBS chan<- cron.Job
var RESULTS <-chan cron.Job

// Initialize the API on port 8090
func Initialize(jobs chan<- cron.Job, results <-chan cron.Job) {
	// Set global variables
	JOBS = jobs
	RESULTS = results

	// Setup routes
	http.HandleFunc("/newJob", NewJob)

	// Start http server
	http.ListenAndServe(":8090", nil)
}