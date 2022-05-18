FROM centos:7

# RUN yum -y update
RUN curl –sL https://rpm.nodesource.com/setup_16.x | sh -
RUN yum install -y java-1.8.0-openjdk nodejs git
ADD run-tests.sh .
ENTRYPOINT ["sh", "run-tests.sh"]