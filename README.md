# Leviathan
Leviathan is platform for me to deploy applications and cron jobs with ease. It will be built with containers in mind for, so the platform can be scalable.

# Diagrams
All diagrams are made with [mermaid](https://mermaid-js.github.io/mermaid/#/).

Command for generating mermaid images:
```bat
mmdc -t dark -b #0d1117 -i inputfile.mmd -o outputfile.png
```

Rounded nodes indicates they are scalable.

## Domain
![](diagrams/domain.png)

# Technologies
The primary technology that will be used is [Docker](https://www.docker.com/). This will allow me to create all the modules (nodes) independently and with their own technology.

> To implement the scalability, I will most likely either use [Docker Swarm](https://docs.docker.com/engine/swarm/) or [Kubernetes](https://kubernetes.io/). Both are yet to be researched, so a final conclusion has not been made.

These were my initial thoughts. I have now concluded the project will use Kubernetes, because support for Docker Swarm will come to a halt in the comming years.

# Modules
In this section, I will be describing all the modules and what their purpose for the project is.

## Website
The website will hold a frontend for my public projects, as well as, for Leviathan itself.

## JWT Authentication Server
This server will handle all authentication for Leviathan with the industry standard [RFC 7519](https://jwt.io/) protocol.

## Leviathan
Leviathan is the "administration" page for all my future needs. It will have a dedicated API that will communicate the Cron and App Manager.

## Cron and App Manager
The Cron and App Managers job is to handle the management of the Cron Jobs and Applications. The tasks will include booting, deletion, activation, deactivation and whatever else I come up with.

## Database Caching Server
This servers responsibility is to cache data that is frequantly used.