//
//  EmojiDef.swift
//  Chippendales
//
//  Created by Sivaraj-Pasumalaithevan (Contractor) on 6/15/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import Foundation
import UIKit

struct EmojiDefs {
  enum Categories { case lips, speech, dance }
  
  static func imageForCategory(_ category: Categories) -> [String] {
    switch(category) {
    case .lips:
      return lipsImages
    case .speech:
      return speechImages
    case .dance:
      return danceImages
    }
  }
  
  static func loadGif(name: String, imageDir: String) -> UIImage? {
    if let localGifURL = Bundle.main.url(forResource: name.components(separatedBy: ".").first, withExtension: "gif", subdirectory: imageDir){
      return UIImage.gif(url: localGifURL)
    }
    return nil
  }
  
  static let emojilinks = ["100_Maker_FindersV1": "http://www.makerslv.com/" ,
                           "101_Maker_FindersV2": "http://www.makerslv.com/" ,
                           "102_NeonMuseum" : "http://www.neonmuseum.org/",
                           "103_SmithCenter" : "https://www.thesmithcenter.com/",
                           "104_VelveteenRabbit" : "http://velveteenrabbitlv.com/"
                      ]

  static let speechImages: [String] = listFilesFromDocumentsFolder(folderPath: "images/speeches")!
  
  static let danceImages: [String] = listFilesFromDocumentsFolder(folderPath: "images/dancers")!
  
  static let lipsImages: [String] = listFilesFromDocumentsFolder(folderPath: "images/lips")!
  
  static func listFilesFromDocumentsFolder(folderPath: String)->[String]?{
    var imageNames = [String]()
    let docsPath = Bundle.main.resourcePath! + "/" + folderPath
    let fileManager = FileManager.default
    do {
       imageNames = try fileManager.contentsOfDirectory(atPath: docsPath)
    } catch {
      print(error)
    }
    return imageNames
  }
}
