import { NextApiRequest, NextApiResponse } from "next";
import { classService } from "../providers/class.service";
import { createClassWithRelation } from "../interfaces/rootCrud";

export class classController extends classService {
  async getAllDataClassNotRelation(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    return await this._getClassAllButNotWithRelations(req, res, error);
  }
  async getAllDataClassRelation(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    return await this._getClassAllWithRelations(req, res, error);
  }

  async getSortDataClassSortNotRelation(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    return await this._getClassSortButNotWithRelations(req, res, error);
  }

  async getSortDataClassSortRelation(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    return await this._getClassSortWithRelations(req, res, error);
  }

  async createClassWithoutRelation(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    return await this._createClassWithoutRelation(req, res, error);
  }

  async createClassWithRelation(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    return await this._createClassWithRelation(req, res, error);
  }

  async updateClass(req: NextApiRequest, res: NextApiResponse, error: any) {
    return await this._updateClass(req, res, error);
  }

  async updateParticipantsClass(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    return await this._updateParticipantsClass(req, res, error);
  }

  async updateMentorsClass(
    req: NextApiRequest,
    res: NextApiResponse,
    error: any
  ) {
    return await this._updateMentorsClass(req, res, error);
  }

  async deleteClass(req: NextApiRequest, res: NextApiResponse, error: any) {
    return this._deleteClass(req, res, error);
  }
}
