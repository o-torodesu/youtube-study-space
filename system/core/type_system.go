package core

import (
	"app.modules/core/myfirestore"
	"app.modules/core/mylinebot"
	"app.modules/core/youtubebot"
)

type System struct {
	FirestoreController *myfirestore.FirestoreController
	LiveChatBot *youtubebot.YoutubeLiveChatBot
	LineBot *mylinebot.LineBot
	MinWorkTimeMin int
	MaxWorkTimeMin int
	DefaultWorkTimeMin int
	ProcessedUserId string
	ProcessedUserDisplayName string
	DefaultSleepIntervalMilli int
}

type CommandDetails struct {
	CommandType CommandType
	InOptions   InOptions
	InfoOption InfoOption
	MyOptions   []MyOption
	ChangeOptions []ChangeOption
}

type CommandType uint
const (
	NotCommand CommandType = iota
	InvalidCommand
	In		// !in
	SeatIn	// !席番号
	Out		// !out
	Info	// !info
	My		// !my
	Rank	// !rank
	Change 	// !change
)

type InfoOption struct {
	ShowDetails bool
}

type MyOptionType uint
const (
	RankVisible MyOptionType = iota
	DefaultStudyMin
)

type ChangeOptionType uint
const (
	WorkName ChangeOptionType = iota
)

type InOptions struct {
	SeatId   int
	WorkName string
	WorkMin  int
}

type MyOption struct {
	Type MyOptionType
	IntValue int
	BoolValue bool
	StringValue string
}

type ChangeOption struct {
	Type ChangeOptionType
	StringValue string
}

type UserIdTotalStudySecSet struct {
	UserId string	`json:"user_id"`
	TotalStudySec int	`json:"total_study_sec"`
}