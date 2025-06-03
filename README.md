# Streams and Clusters in Node.js

This project demonstrates the use of **Streams** and **Clusters** in Node.js to handle large-scale data processing and optimize performance using multi-core CPUs.

# Features

- Stream-based file reading and writing.
- Transform streams for real-time data processing.
- Cluster module for parallel processing using multiple CPU cores.
- Graceful worker management and process communication.

# Technologies Used

- Node.js
- Built-in modules: `fs`, `stream`, `cluster`, `os`

# Concepts

## - Streams

- Efficient for processing large files/data.

- Types: Readable, Writable, Duplex, Transform.

- Reduce memory consumption and improve performance.

## - Clusters

- Create child processes (workers) to utilize multi-core CPUs.

- Master process manages load distribution.

- Useful for scaling server applications.


### Note :

- Make sure your system has multiple CPU cores to see cluster benefits.

- Ideal for large data pipelines and scalable server architectures.
---
