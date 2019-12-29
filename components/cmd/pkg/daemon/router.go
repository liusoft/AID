// Copyright (c) 2019 Xiaozhe Yao & AICAMP.CO.,LTD
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

package daemon

import (
	"github.com/gin-gonic/gin"
)

func getRouter() *gin.Engine {
	r := gin.Default()
	r.Use(beforeResponse())
	r.Use(gin.Recovery())
	r.GET("/packages", getPackages)
	r.GET("/v", getVersion)
	return r
}
