package api

import (
	"cron-manager/cron/models"
)

type Response struct {
	Message string `json:"message"`
}

type JobResponse struct {
	Job cron.Job `json:"job"`
	Response
}