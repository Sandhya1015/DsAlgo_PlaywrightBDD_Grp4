pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
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
                bat 'npx playwright install'
            }
        }

        stage('Generate BDD Specs') {
            steps {
                bat 'npx bddgen'
            }
        }

        stage('Run Tests - Chromium') {
            steps {
                bat 'npx playwright test --project=chromium'
            }
        }

        stage('Run Tests - Firefox') {
            steps {
                bat 'npx playwright test --project=firefox'
            }
        }

        stage('Run Tests - WebKit') {
            steps {
                bat 'npx playwright test --project=webkit'
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
            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
            echo ' Allure report archived in Jenkins!'
        }
        success {
            echo ' All tests passed!'
        }
        failure {
            echo 'Some tests failed!'
        }
    }
}