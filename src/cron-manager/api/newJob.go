package api

import (
	"net/http"
	"cron-manager/cron"
)

func NewJob(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	
	job := cron.Job{}
	job.Name = r.FormValue("name")
	job.Command = r.FormValue("command")
	job.Schedule = r.FormValue("schedule")
	JOBS <- job
}