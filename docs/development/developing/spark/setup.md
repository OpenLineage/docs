---
sidebar_position: 1
title: Build
---

# Build

## Java 8

Testing requires a Java 8 JVM to test the Scala Spark components.

`export JAVA_HOME=` '/usr/libexec/java_home -v 1.8'

## Preparation

The integration depends on three libraries that are build locally `openlineage-java`, `spark-interfaces-scala` and `openlineage-sql-java`,
so before any testing or building of a package you need to publish the appropriate artifacts to local maven repository.
To build the packages you need to execute.

To install `openlineage-java` in local maven repo run:
```sh
cd ../../client/java/ && ./gradlew publishToMavenLocal
```

For `spark-interfaces-scala` run:
```sh
cd ../../integration/spark-interfaces-scala && ./gradlew publishToMavenLocal -Pscala.binary.version=2.12
```

For `openlineage-sql-java` run:

```sh
../../integration/sql/iface-java/ && ./script/compile.sh
../../integration/sql/iface-java/ && ./script/build.sh
```

## Testing

To run the tests, from the current directory run:

```sh
./gradlew test
```

To run the integration tests, from the current directory run:

```sh
./gradlew integrationTest
```

## Build jar

```sh
./gradlew shadowJar
```

## Contributing

If contributing changes, additions or fixes to the Spark integration, please include the following header in any new `.java` files:

```
/* 
/* Copyright 2018-2024 contributors to the OpenLineage project
/* SPDX-License-Identifier: Apache-2.0 
*/
```

A Github Action checks for headers in new `.java` files when pull requests are opened.

Thank you for your contributions to the project!