package api

import (
	"encoding/json"
	"net/http"
)

type ResponseWriter struct {
	http.ResponseWriter
}

func (w *ResponseWriter) SendJSON(data interface{}) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}