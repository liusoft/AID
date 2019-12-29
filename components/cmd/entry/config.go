// Copyright (c) 2019 Xiaozhe Yao & AICAMP.CO.,LTD
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

package main

import (
	"github.com/autoai-org/aiflow/components/cmd/pkg/utilities"
)

// readConfig checks if all the required folder exists,
// If not, it will create the folder

var config *utilities.Config

func readConfig() {
	config = utilities.NewConfig("./config.json")
}