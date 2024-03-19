pipeline{
    agent any
    // tools:
    // git 'Git'
    // node 'nodeJS'

    environment{
      registry = "tomcoder/reactImages"
      registryCredential = "dockerhub-key"
    }

    stages{
      stage('install dependencies'){
        steps{
            sh 'npm install'
            sh 'npm run build'
            }
        }
        stage('fetch'){
          steps{
            git branch: 'main', url: 'https://github.com/thomaseneh/React-Essential.git' 
            }
        }
      stage('unit test'){
        steps{
            sh 'npm run test'
        }
      }
      stage('integration test'){
        steps{
            sh 'npm run integration test Dskip unitTest'
        }
      }
      stage('style analysis'){
        steps{
            sh 'npm run checkstyle'
            }
        }
      stage('sonar analysis'){
        environment{
            scannerHome = tool 'sonarQubeScanner'
        }
        steps{
            withSonarQubeEnv('sonarQubeScanner'){
                sh '''package*.jason -Dsonar.projectKey=devops \
                    -Dsonar.projectName=reactEssential'''
                }
            }
        }
      stage("Quality Gate") {
        steps {
            timeout(time: 10, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: true
                }
            }
        }
      stage('build image'){
        steps{
            script{
              image = "sh docker build ${registry}:$BUILD_ID"
              }
            }
        }
      stage('upload'){
        steps{
          script{
            docker.withEnvRegistry('', registryCredential){
              image.push("${BUILD_ID}")
              image.push(":$latest")
              }
            }
          }
        }
      stage('remove unused images'){
        steps{
            script{
              sh "docker rmi ${registry}:$BUILD_ID"
            }
            }
        }
        stage('message'){
            steps{
                echo 'Code need at leat unit test or integration test. Fix and get back to me'
            }
            post{
                success{
                    echo 'All stages are successful, archeving the actifacts'
                    archiveArtifacts artifacts: '**/target/*.war'
                }
            }
        }
    }
}