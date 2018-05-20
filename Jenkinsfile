pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('NPM Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Packaging') {
            steps {
                sh 'npm run webpack'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run test' 
            }
        }
    }
}