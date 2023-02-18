pipeline{
    agent any
    tools{
            nodejs "node"
    }
    stages{
        stage('Clone repository'){
            steps{
                git 'https://github.com/molline/gallery'
            }
        }
        stage('Software Check'){
            steps{
                sh 'npm install'
            }
        }
        stage('Build'){
            steps{
                sh 'node server.js'
            }
        }
        stage('Deploy to render'){
            steps{
                echo 'Deploying to render'
            }
        }
        
    }
}