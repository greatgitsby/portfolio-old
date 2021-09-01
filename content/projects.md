---
title: projects
description: A few of the projects I have worked on.
published: true
createdAt: '2021-07-13T00:00:00.000Z'
updatedAt: '2021-09-01T05:47:25.215Z'
---

The following is a collection of projects I have worked on in the past for both university, current, and past jobs. Any source code that is publicly available can be found [on my GitHub](https://github.com/greatgitsby).

# personal
## [wedding website](https://owen2moen.com)

I created a website for the wedding of myself and my super awesome fiancée Avery Owen. It will soon have RSVP functionality, custom wedding invite details, a page for our registry links, as well as a gallery of images on the homepage. Feel free to view it at [owen2moen.com](https://owen2moen.com).

# university
## [gfu epic website](https://gfuprojects.com)

This website is for my Servant Engineering project during my third year at Fox. We created a workflow and set of resources for teachers at a local high school to submit project ideas and have us create what they had envisioned. Feel free to view it at [gfuprojects.com](https://gfuprojects.com). The source is located [here](https://github.com/greatgitsby/gfu-project-site).

# work
## simple monitors - client dashboard

I built a dashboard for Simple Monitors clients to manage their webhook configurations, authentication, and release channels. It leverages HTML/CSS/jQuery and is served by a simple Node.js application and it runs on a simple Heroku configuration. 

## simple monitors - admin dashboard

I built a dashboard for internal management of sites and products monitored by our web scraping platform. Each site 'platform' has a dedicated page to display its active configurations and perform C.R.U.D. operations.

## simple monitors - web scraper platform 

The management dashboard would hold very little value without the scraping platform itself. I created a fully distributed scraping platform to monitor product additions and restocks. The platform is backed by a Kubernetes cluster and leverages technologies like Redis, an MPI-like layer on top of Redis, and various Node.js microservices.

## simple monitors - database rest api

I built a REST API for accessing our database configurations. It supported JWT and API key authentication and scope-based access for those using JWT to access (our admin dashboard). I used TypeScript and MongoDB as the primary technologies for this project, and it was hosted on a multi-node Heroku application.

## simple monitors - http client for tls spoofing

I designed an HTTP client that allows for spoofing of TLS Client-Hello packets. These inital packets are used in many bot protections and allowed for fine-tuning of our scrapers to look like authentic browsers, even past a User-Agent modification. The library was written in Node.js and bootstrapped to a Go program that facilitated the network requests.

## simple monitors - grafana implementation

I implemented Grafana and Prometheus to get live stats on our distribution pipeline and overall Kubernetes cluster health. Below is an abbrevatied view of the dashboard I created.

![Image](img/graph.png)
