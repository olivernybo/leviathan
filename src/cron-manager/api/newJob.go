package api

import (
	"net/http"
	"cron-manager/cron"
)

// Route to create a new cron job
func NewJob(w http.ResponseWriter, r *http.Request) {
	// If the request is not a POST, return an error
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	
	// Create a new job
	// todo validate the request body
	job := cron.Job{}
	job.Name = r.FormValue("name")
	job.Command = r.FormValue("command")
	job.Schedule = r.FormValue("schedule")

	// Add the job to the jobs channel
	JOBS <- job
}