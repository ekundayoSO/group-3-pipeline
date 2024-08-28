pipeline {
    agent any
    
    tools {nodejs "node"}

      environment {
        REGISTRATION_PASSWORD = credentials('registrationPwd-password-id') 
        EMAIL = credentials('email-id') 
        PASSWORD = credentials('registrationPwd-password-id') 
    }
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
              sh "pwd"
              dir('tests') {
              sh "pwd"
              sh 'npm install'
              sh 'npm test'
              }
            }
        }
        stage('Deploy') {
            steps {
                echo "Deployed to AWS"
            }
        }
    }
}
