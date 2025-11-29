package main

import (
"log"
"net/http"
"os"
)

func main() {

	// Serve static files out of the public directory.
	// By configuring a static handler in app.yaml, App Engine serves all the
	// static content itself. As a result, the following three lines are in
	// effect for development only.
	public := http.FileServer(http.Dir("public"))
	http.Handle("/static/", public)
	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/", lukaHandler)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	// Only handle root path and non-luka subdomain
	if r.URL.Path != "/" || lukaSubdomain(r) {
		http.NotFound(w, r)
		return
	}
	http.ServeFile(w, r, "public/oostdam.html")
}

// redirects luka subdomain requests to /static/software/luka/index.html
func lukaHandler(w http.ResponseWriter, r *http.Request) {
	if lukaSubdomain(r) {
		http.ServeFile(w, r, "public/static/software/luka/index.html")
		return
	}
}

// checks if the request is from the luka subdomain
func lukaSubdomain(r *http.Request) bool {
	host := r.Host
	return len(host) >= 5 && host[:5] == "luka."
}