pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/vignshsezhiyan/SCSS-ECOM.git'
            }
        }


        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t react-app .
                '''
            }
        }


        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop react-app || true
                docker rm react-app || true
                '''
            }
        }


        stage('Run Container') {
            steps {
                sh '''
                docker run -d \
                --name react-app \
                -p 80:80 \
                react-app
                '''
            }
        }
    }
}
