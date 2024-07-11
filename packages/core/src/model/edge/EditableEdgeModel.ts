import LogicFlow from '../../LogicFlow'
import BaseEdgeModel from './BaseEdgeModel'
import { ModelType } from '../../constant'

import Point = LogicFlow.Point

export class EditableEdgeModel extends BaseEdgeModel {
  modelType = ModelType.EDITABLE_EDGE
  virtualPointList: Point[] = []

  initEdgeData(data: LogicFlow.EdgeConfig): void {
    super.initEdgeData(data)
  }
}
