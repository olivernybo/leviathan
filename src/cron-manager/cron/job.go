package cron

// Job represents a cron job
type Job struct {
	Name string
	Command string
	Schedule string
	Output string
	Error string
	Result JobResult
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