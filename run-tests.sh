REPO=$1
PARALLEL_RUNS=$2
git clone $1 tests
cd tests && npm install
npx codeceptjs run-workers $PARALLEL_RUNS
allure generate -c reports/allure-results -o reports/allure-results-html