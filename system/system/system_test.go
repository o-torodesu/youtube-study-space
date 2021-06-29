package system

import (
	"app.modules/system/myfirestore"
	"context"
	"github.com/stretchr/testify/assert"
	"google.golang.org/api/option"
	"testing"
)

func GenerateTestSystem() System {
	ctx := context.Background()
	clientOption := option.WithCredentialsFile("C:/Dev/GCP credentials/youtube-study-space-95bb4187aace.json")
	_system, _ := NewSystem(ctx, clientOption)
	return _system
}

func TestNewSystem(t *testing.T) {
	ctx := context.Background()
	clientOption := option.WithCredentialsFile("C:/Dev/GCP credentials/youtube-study-space-95bb4187aace.json")
	assert.NotNil(t, clientOption)
	fsController, err := myfirestore.NewFirestoreController(ctx, ProjectId, clientOption)
	assert.Nil(t, err)
	constantsConfig, err := fsController.RetrieveSystemConstantsConfig(ctx)
	assert.Nil(t, err)
	
	_system, err := NewSystem(ctx, clientOption)
	
	assert.Nil(t, err)
	assert.NotNil(t, _system.FirestoreController)
	assert.NotNil(t, _system.LiveChatBot)
	assert.NotNil(t, _system.LineBot)
	assert.Equal(t, constantsConfig.MinWorkTimeMin, _system.MinWorkTimeMin)
	assert.Equal(t, constantsConfig.MaxWorkTimeMin, _system.MaxWorkTimeMin)
	assert.Equal(t, "", _system.ProcessedUserId)
	assert.Equal(t, "", _system.ProcessedUserDisplayName)
	assert.Equal(t, constantsConfig.SleepIntervalMilli, _system.DefaultSleepIntervalMilli)
}

func TestSystem_SetProcessedUser(t *testing.T) {
	userId := "test-user-id"
	userDisplayName := "test-user-display-name"
	
	_system := GenerateTestSystem()
	assert.NotNil(t, _system)
	
	_system.SetProcessedUser(userId, userDisplayName)
	
	assert.Equal(t, userId, _system.ProcessedUserId)
	assert.Equal(t, userDisplayName, _system.ProcessedUserDisplayName)
}

func TestSystem_CloseFirestoreClient(t *testing.T) {
	// todo
}

func TestSystem_Command(t *testing.T) {
	_system := GenerateTestSystem()
	assert.NotNil(t, _system)
	
	// todo
}

//func TestSystem_IfSeatAvailable(t *testing.T) {
//	_system := GenerateTestSystem()
//	assert.NotNil(t, _system)
//
//	seatId := 0
//	ctx := context.Background()
//
//	isSeatAvailable, err := _system.IfSeatAvailable(seatId, ctx)
//	assert.Nil(t, err)
//	// todo
//}

