package cron

// Job represents a cron job
type Job struct {
	Name string `json:"name"`
	Command string `json:"command"`
	Schedule string `json:"schedule"`
	Output string `json:"output"`
	Error string `json:"error"`
	Result JobResult `json:"result"`
}

type JobResult uint16

const (
	Pending JobResult = iota
	Failure
	Success
)

func (jobResult JobResult) String() string {
	switch jobResult {
		case Success:
			return "success"
		case Failure:
			return "failure"
		default:
			return "pending"
	}
}