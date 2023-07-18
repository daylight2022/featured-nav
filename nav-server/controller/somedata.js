const HotspotsController = require('./hotspots')

module.exports = {
  getHotspotsData: async (req, res) => {
    try {
      const [baiduHotspots, douyinHotspots, weiboHotspots, historyToday] = await Promise.all([
        HotspotsController.getBaiduHotspots(),
        HotspotsController.getDouyinHotspots(),
        HotspotsController.getWeiboHotspots(),
        HotspotsController.getHistoryToday(),
      ])

      // 返回实时热点数据
      res.status(200).json({
        baiduHotspots,
        douyinHotspots,
        weiboHotspots,
        historyToday,
      })
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch hotspots data' })
    }
  },
}
