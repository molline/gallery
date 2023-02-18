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
                sh 'npm install' //install npm package
                sh 'npm install --save express'// install express
                sh 'npm install --global yarn'// install yarn
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