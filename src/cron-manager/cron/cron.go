package cron

import (
	
)

func Initialize(jobs <-chan Job, results chan<- Job) {
	for i := 0; i < 4; i++ {
		go Worker(jobs, results)
	}
}