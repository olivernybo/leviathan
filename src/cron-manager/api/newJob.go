package api

import (
	"net/http"
	"encoding/json"
	"cron-manager/cron/models"
	"cron-manager/api/models"
)

// Route to create a new cron job
func NewJob(w http.ResponseWriter, r *http.Request) {
	// Get the job from the request body
	name := r.FormValue("name")
	command := r.FormValue("command")
	schedule := r.FormValue("schedule")

	// Validate the fields. Name and command are required. Schedule is optional. Schedule is a time format
	if name == "" || command == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(api.Response{
			Message: "Missing fields",
		})
		return
	}

	// If the schedule is empty, set it to "* * * * *" else validate the schedule format
	if schedule == "" {
		schedule = "* * * * *"
	}
	// todo validate the schedule format
	
	// Create a new job
	job := cron.Job{
		Name: name,
		Command: command,
		Schedule: schedule,
	}

	// Add the job to the jobs channel
	JOBS <- job

	// Return a success message with the job
	json.NewEncoder(w).Encode(api.JobResponse{
		Job: job,
		Response: api.Response{
			Message: "Job added",
		},
	})
}