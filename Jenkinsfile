pipeline {

    agent any

    parameters {
        string(
            name: 'BRANCH',
            defaultValue: 'master',
            description: 'Branch to deploy'
        )
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: "${params.BRANCH}",
                    url: 'https://github.com/vignshsezhiyan/SCSS-ECOM.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t react-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop react-app || true
                docker rm react-app || true
                docker run -d \
                --name react-app \
                --restart always \
                -p 80:80 \
                react-app
                '''
            }
        }
    }
}
