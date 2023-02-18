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
                sh 'npm install --save express'
            }
        }
        stage('Build'){
            steps{
                sh 'yarn'
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