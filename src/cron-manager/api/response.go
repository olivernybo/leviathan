package api

import (
	"cron-manager/cron"
)

type Response struct {
	Message string `json:"message"`
}

type JobResponse struct {
	Job cron.Job `json:"job"`
	Response
}