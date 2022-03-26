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

type JobResult byte

const (
	Failure JobResult = iota
	Success
)

func (jobResult JobResult) String() string {
	switch jobResult {
		case Success:
			return "success"
		case Failure:
			return "failure"
		default:
			return "unknown"
	}
}