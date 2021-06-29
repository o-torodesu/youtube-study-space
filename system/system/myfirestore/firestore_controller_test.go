package myfirestore

import (
	"context"
	"github.com/stretchr/testify/assert"
	"google.golang.org/api/option"
	"testing"
)

const (
	TestProjectId = "youtube-study-space"
)

func TestNewFirestoreController(t *testing.T) {
	ctx := context.Background()
	projectId := TestProjectId
	clientOption := option.WithCredentialsFile("C:/Dev/GCP credentials/youtube-study-space-95bb4187aace.json")
	
	controller, err := NewFirestoreController(ctx, projectId, clientOption)
	assert.Nil(t, err)
	assert.NotNil(t, controller.FirestoreClient)
}

func GenerateTestFirestoreController() *FirestoreController {
	ctx := context.Background()
	projectId := TestProjectId
	clientOption := option.WithCredentialsFile("C:/Dev/GCP credentials/youtube-study-space-95bb4187aace.json")
	
	controller, err := NewFirestoreController(ctx, projectId, clientOption)
	if err != nil {
		panic(err)
	}
	return controller
}

func TestFirestoreController_RetrieveYoutubeLiveConfig(t *testing.T) {
	controller := GenerateTestFirestoreController()
	
	youtubeLiveData, err := controller.RetrieveYoutubeLiveConfig(context.Background())
	
	assert.Nil(t, err)
	assert.NotNil(t, youtubeLiveData)
	assert.NotEqual(t, "", youtubeLiveData.LiveChatId)
	assert.NotEqual(t, "", youtubeLiveData.NextPageToken)
	assert.NotEqual(t, "", youtubeLiveData.OAuthRefreshTokenUrl)
}
