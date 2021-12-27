import { TextNodeModel, TextNode } from '@logicflow/core'
import { getShapeStyleFuction, getTextStyleFunction } from '../getShapeStyleUtil'

// 文本节点
class TextNewNode extends TextNode {
  getShapeStyle () {
    const style = super.getShapeStyle()
    const properties = this.getProperties()
    return getShapeStyleFuction(style, properties)
  }

  getTextStyle () {
    const style = super.getTextStyle()
    const properties = this.getProperties()
    if (properties.backgroundColor) {
      style.backgroundStyle = {
        fill: properties.backgroundColor
      }
    }
    return getTextStyleFunction(style, properties)
  }
}
class TextNewModel extends TextNodeModel {
  setAttributes () {
    super.setAttributes()
    if (!this.text.value) {
      this.text.value = 'text'
    }
  }
}

export default {
  type: 'pro-text',
  view: TextNewNode,
  model: TextNewModel
}
