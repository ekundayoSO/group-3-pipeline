pipeline {
    agent any

    environment {
        // Set environment variables for sensitive data
        REGISTRATION_PASSWORD = credentials('registrationPwd-password-id') 
        EMAIL = credentials('email-id') 
        PASSWORD = credentials('registrationPwd-password-id') 
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository containing your tests
                git 'https://github.com/ekundayoSO/pipeline-group-3.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js and npm if not already available
                    sh '''
                    if ! command -v node &> /dev/null; then
                        curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                        sudo apt-get install -y nodejs
                    fi
                    npm install
                    '''
                }
            }
        }

        stage('Run Registration Tests') {
            steps {
                script {
                    // Run the Mocha tests for registration
                    sh 'npx mocha tests/registration.js'
                }
            }
        }

        stage('Run Login Tests') {
            steps {
                script {
                    // Run the Mocha tests for login
                    sh 'npx mocha tests/login.js'
                }
            }
        }
    }

    stage('Run demo Tests') {
            steps {
                script {
                    // Run the Mocha tests for login
                    sh 'npx mocha tests/demo.js'
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace after the build
            cleanWs()
        }
        success {
            echo 'Tests ran successfully!'
        }
        failure {
            echo 'Tests failed. Check the logs for details.'
        }
    }
}
