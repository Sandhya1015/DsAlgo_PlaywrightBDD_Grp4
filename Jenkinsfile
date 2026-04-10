pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Sandhya1015/DsAlgo_PlaywrightBDD_Grp4.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install chromium'
            }
        }

        stage('Generate BDD Specs') {
            steps {
                bat 'npx bddgen'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test --project=chromium --grep-invert @bug'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        always {
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])
        }
        success {
            echo '✅ All tests passed!'
        }
        failure {
            echo '❌ Some tests failed!'
        }
    }
}