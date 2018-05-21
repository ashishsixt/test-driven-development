pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    /* parameteres {
        string(name: "dev", defaultValue: 'IP', description: 'Some Info')
        string(name: "prod", defaultValue: 'IP', description: 'Some Info')
    } */
    triggers {
        pollSCM('* * * * *')
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
        /*stage('Deploy to staging') {
            steps {
                build job: 'Deploy-to-Staging'
            }
        }
        stage('Deploy to Production') {
            steps {
                timeout(time: 5, unit: 'DAYS') {
                    input message: 'Approve production deploy?', submitter: xxxx
                }
                build job: 'Deploy-to-Production'
            }
            post {
                success {
                    echo 'successfully deployed to production'
                }
                failure {
                    echo 'Deployment failed in production'
                }
            }
        } */
    }
}