echo Running test for $SERVICE
mkdir /opt/test-automation
cd /opt/test-automation
npm install -g allure-commandline
yum install -y which
export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which javac))))
git clone $GIT_REPO_URL tests
cd tests
npm install
npm install codeceptjs
npx -y codeceptjs run-workers $PARALLEL_RUNS
allure generate -c output/ -o reports/allure-results-html