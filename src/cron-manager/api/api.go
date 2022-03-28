package api

import (
	"net/http"
	"cron-manager/cron/models"
	"github.com/gorilla/mux"
)

// Global variables
var JOBS chan<- cron.Job
var RESULTS <-chan cron.Job

// Initialize the API on port 8090
func Initialize(jobs chan<- cron.Job, results <-chan cron.Job) {
	// Set global variables
	JOBS = jobs
	RESULTS = results
	
	// Create a new router
	router := mux.NewRouter()

	// Add routes
	router.HandleFunc("/jobs", NewJob).Methods("POST")

	// Start the server
	http.ListenAndServe(":8090", Middleware(router))
}