package api

import (
	"net/http"
	"encoding/json"
	"cron-manager/cron"
)

// Route to create a new cron job
func NewJob(w http.ResponseWriter, r *http.Request) {
	
	// Create a new job
	// todo validate the request body
	job := cron.Job{}
	job.Name = r.FormValue("name")
	job.Command = r.FormValue("command")
	job.Schedule = r.FormValue("schedule")

	// Add the job to the jobs channel
	JOBS <- job

	// Return a success message with the job
	json.NewEncoder(w).Encode(JobResponse{job, Response{"Job added"}})
}