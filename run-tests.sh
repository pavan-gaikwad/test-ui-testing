echo Running test for $SERVICE
mkdir /opt/test-automation
cd /opt/test-automation
npm install -g allure-commandline
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.332.b09-1.el7_9.aarch64/jre
git clone $GIT_REPO_URL tests
cd tests
npm install
npm install codeceptjs
npx -y codeceptjs run-workers $PARALLEL_RUNS
allure generate -c output/ -o reports/allure-results-html