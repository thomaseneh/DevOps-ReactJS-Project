pipeline{
    agent any
    // tools:
    //   git 'Git'
    //   node 'nodeJS'

    environment{
      registry = "tomcoder/reactimages"
      registryCredential = "dockerhub"
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
            git branch: 'master', url: 'https://github.com/thomaseneh/DevOps-ReactJS-Project.git' 
            }
        }
      // stage('unit test'){
      //   steps{
      //       sh 'npm run test'
      //   }
      // }
      // stage('integration test'){
      //   steps{
      //       sh 'npm run integration test Dskip unitTest'
      //   }
      // }
      // stage('style analysis'){
      //   steps{
      //      script{
      //         sh 'npm run checkstyle'
      //         }
      //       }
      //   }
      // stage('sonar analysis') {
      //   environment {
      //     scannerHome = tool 'sonarQubeScanner'
      //     }
      //     steps {
      //       script {
      //         withSonarQubeEnv('sonarScanner') {
      //           sh """\"${scannerHome}\\bin\\sonar-scanner\" -Dsonar.projectKey=devops -Dsonar.projectName=reactEssential"""
      //           }
      //         }
      //       }
      //     }
      // stage("Quality Gate") {
      //   steps {
      //       timeout(time: 10, unit: 'MINUTES') {
      //           waitForQualityGate abortPipeline: true
      //           }
      //       }
      //   }
      stage('build image'){
        steps{
            script{
                dockerimage = docker.build registry + ":$BUILD_NUMBER"
              }
            }
        }
      stage('upload') {
          steps {
              script {
                  docker.withRegistry('', registryCredential) {
                    dockerimage.push("$BUILD_NUMBER")
                    dockerimage.push("latest")
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
        stage('deploy to k8s'){
          agent{label 'kops'}
          steps{
            sh 'help upgrade --install --force toprefunder-k8s helm/helmchat --set appImage=${registry}:${BUILD_NUMBER}'
          }
        }
        stage('message'){
            steps{
                echo 'Code need at leat unit test or integration test. Fix and get back to me'
            }
            post{
                success{
                    echo 'All stages are successful, archeving the actifacts'
                    // archiveArtifacts artifacts: 'build/**'
                      archiveArtifacts 'dist/**'
                }
            }
        }
    }
}
