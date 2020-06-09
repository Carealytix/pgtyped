// Generated from src/loader/typescript/grammar/QueryParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { QueryParserListener } from "./QueryParserListener";
import { QueryParserVisitor } from "./QueryParserVisitor";


export class QueryParser extends Parser {
	public static readonly ID = 1;
	public static readonly SINGULAR_PARAM_MARK = 2;
	public static readonly PLURAL_PARAM_MARK = 3;
	public static readonly COMMA = 4;
	public static readonly OB = 5;
	public static readonly CB = 6;
	public static readonly WORD = 7;
	public static readonly SPECIAL = 8;
	public static readonly EOF_STATEMENT = 9;
	public static readonly WSL = 10;
	public static readonly STRING = 11;
	public static readonly RULE_input = 0;
	public static readonly RULE_query = 1;
	public static readonly RULE_ignored = 2;
	public static readonly RULE_param = 3;
	public static readonly RULE_scalarParam = 4;
	public static readonly RULE_pickParam = 5;
	public static readonly RULE_arrayPickParam = 6;
	public static readonly RULE_arrayParam = 7;
	public static readonly RULE_paramName = 8;
	public static readonly RULE_pickKey = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"input", "query", "ignored", "param", "scalarParam", "pickParam", "arrayPickParam", 
		"arrayParam", "paramName", "pickKey",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'$'", "'$$'", "','", "'('", "')'", undefined, undefined, 
		"';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ID", "SINGULAR_PARAM_MARK", "PLURAL_PARAM_MARK", "COMMA", 
		"OB", "CB", "WORD", "SPECIAL", "EOF_STATEMENT", "WSL", "STRING",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(QueryParser._LITERAL_NAMES, QueryParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return QueryParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "QueryParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return QueryParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return QueryParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(QueryParser._ATN, this);
	}
	// @RuleVersion(0)
	public input(): InputContext {
		let _localctx: InputContext = new InputContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, QueryParser.RULE_input);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this.query();
			this.state = 21;
			this.match(QueryParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, QueryParser.RULE_query);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QueryParser.ID) | (1 << QueryParser.SINGULAR_PARAM_MARK) | (1 << QueryParser.PLURAL_PARAM_MARK) | (1 << QueryParser.COMMA) | (1 << QueryParser.OB) | (1 << QueryParser.CB) | (1 << QueryParser.WORD) | (1 << QueryParser.SPECIAL) | (1 << QueryParser.STRING))) !== 0)) {
				{
				{
				this.state = 26;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QueryParser.ID) | (1 << QueryParser.COMMA) | (1 << QueryParser.OB) | (1 << QueryParser.CB) | (1 << QueryParser.WORD) | (1 << QueryParser.SPECIAL) | (1 << QueryParser.STRING))) !== 0)) {
					{
					{
					this.state = 23;
					this.ignored();
					}
					}
					this.state = 28;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 29;
				this.param();
				this.state = 33;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 30;
						this.ignored();
						}
						}
					}
					this.state = 35;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ignored(): IgnoredContext {
		let _localctx: IgnoredContext = new IgnoredContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, QueryParser.RULE_ignored);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 41;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << QueryParser.ID) | (1 << QueryParser.COMMA) | (1 << QueryParser.OB) | (1 << QueryParser.CB) | (1 << QueryParser.WORD) | (1 << QueryParser.SPECIAL) | (1 << QueryParser.STRING))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 44;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, QueryParser.RULE_param);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.pickParam();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.arrayPickParam();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.scalarParam();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.arrayParam();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalarParam(): ScalarParamContext {
		let _localctx: ScalarParamContext = new ScalarParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, QueryParser.RULE_scalarParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(QueryParser.SINGULAR_PARAM_MARK);
			this.state = 53;
			this.paramName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pickParam(): PickParamContext {
		let _localctx: PickParamContext = new PickParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, QueryParser.RULE_pickParam);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(QueryParser.SINGULAR_PARAM_MARK);
			this.state = 56;
			this.paramName();
			this.state = 57;
			this.match(QueryParser.OB);
			this.state = 58;
			this.pickKey();
			this.state = 63;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 59;
					this.match(QueryParser.COMMA);
					this.state = 60;
					this.pickKey();
					}
					}
				}
				this.state = 65;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QueryParser.COMMA) {
				{
				this.state = 66;
				this.match(QueryParser.COMMA);
				}
			}

			this.state = 69;
			this.match(QueryParser.CB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayPickParam(): ArrayPickParamContext {
		let _localctx: ArrayPickParamContext = new ArrayPickParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, QueryParser.RULE_arrayPickParam);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(QueryParser.PLURAL_PARAM_MARK);
			this.state = 72;
			this.paramName();
			this.state = 73;
			this.match(QueryParser.OB);
			this.state = 74;
			this.pickKey();
			this.state = 79;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 75;
					this.match(QueryParser.COMMA);
					this.state = 76;
					this.pickKey();
					}
					}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 83;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === QueryParser.COMMA) {
				{
				this.state = 82;
				this.match(QueryParser.COMMA);
				}
			}

			this.state = 85;
			this.match(QueryParser.CB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayParam(): ArrayParamContext {
		let _localctx: ArrayParamContext = new ArrayParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, QueryParser.RULE_arrayParam);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(QueryParser.PLURAL_PARAM_MARK);
			this.state = 88;
			this.paramName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public paramName(): ParamNameContext {
		let _localctx: ParamNameContext = new ParamNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, QueryParser.RULE_paramName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(QueryParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pickKey(): PickKeyContext {
		let _localctx: PickKeyContext = new PickKeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, QueryParser.RULE_pickKey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(QueryParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\ra\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x07\x03\x1B\n\x03\f\x03\x0E\x03\x1E\v\x03\x03\x03\x03\x03\x07\x03" +
		"\"\n\x03\f\x03\x0E\x03%\v\x03\x07\x03\'\n\x03\f\x03\x0E\x03*\v\x03\x03" +
		"\x04\x06\x04-\n\x04\r\x04\x0E\x04.\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x055\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07@\n\x07\f\x07\x0E\x07C\v\x07\x03\x07\x05\x07F\n\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bP\n\b\f\b\x0E" +
		"\bS\v\b\x03\b\x05\bV\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x02\x02\x02\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x03\x05\x02\x03\x03\x06\n\r\r\x02" +
		"a\x02\x16\x03\x02\x02\x02\x04(\x03\x02\x02\x02\x06,\x03\x02\x02\x02\b" +
		"4\x03\x02\x02\x02\n6\x03\x02\x02\x02\f9\x03\x02\x02\x02\x0EI\x03\x02\x02" +
		"\x02\x10Y\x03\x02\x02\x02\x12\\\x03\x02\x02\x02\x14^\x03\x02\x02\x02\x16" +
		"\x17\x05\x04\x03\x02\x17\x18\x07\x02\x02\x03\x18\x03\x03\x02\x02\x02\x19" +
		"\x1B\x05\x06\x04\x02\x1A\x19\x03\x02\x02\x02\x1B\x1E\x03\x02\x02\x02\x1C" +
		"\x1A\x03\x02\x02\x02\x1C\x1D\x03\x02\x02\x02\x1D\x1F\x03\x02\x02\x02\x1E" +
		"\x1C\x03\x02\x02\x02\x1F#\x05\b\x05\x02 \"\x05\x06\x04\x02! \x03\x02\x02" +
		"\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02\x02\x02$\'\x03\x02" +
		"\x02\x02%#\x03\x02\x02\x02&\x1C\x03\x02\x02\x02\'*\x03\x02\x02\x02(&\x03" +
		"\x02\x02\x02()\x03\x02\x02\x02)\x05\x03\x02\x02\x02*(\x03\x02\x02\x02" +
		"+-\t\x02\x02\x02,+\x03\x02\x02\x02-.\x03\x02\x02\x02.,\x03\x02\x02\x02" +
		"./\x03\x02\x02\x02/\x07\x03\x02\x02\x0205\x05\f\x07\x0215\x05\x0E\b\x02" +
		"25\x05\n\x06\x0235\x05\x10\t\x0240\x03\x02\x02\x0241\x03\x02\x02\x024" +
		"2\x03\x02\x02\x0243\x03\x02\x02\x025\t\x03\x02\x02\x0267\x07\x04\x02\x02" +
		"78\x05\x12\n\x028\v\x03\x02\x02\x029:\x07\x04\x02\x02:;\x05\x12\n\x02" +
		";<\x07\x07\x02\x02<A\x05\x14\v\x02=>\x07\x06\x02\x02>@\x05\x14\v\x02?" +
		"=\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02\x02\x02" +
		"BE\x03\x02\x02\x02CA\x03\x02\x02\x02DF\x07\x06\x02\x02ED\x03\x02\x02\x02" +
		"EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x07\b\x02\x02H\r\x03\x02\x02\x02" +
		"IJ\x07\x05\x02\x02JK\x05\x12\n\x02KL\x07\x07\x02\x02LQ\x05\x14\v\x02M" +
		"N\x07\x06\x02\x02NP\x05\x14\v\x02OM\x03\x02\x02\x02PS\x03\x02\x02\x02" +
		"QO\x03\x02\x02\x02QR\x03\x02\x02\x02RU\x03\x02\x02\x02SQ\x03\x02\x02\x02" +
		"TV\x07\x06\x02\x02UT\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x03\x02\x02\x02" +
		"WX\x07\b\x02\x02X\x0F\x03\x02\x02\x02YZ\x07\x05\x02\x02Z[\x05\x12\n\x02" +
		"[\x11\x03\x02\x02\x02\\]\x07\x03\x02\x02]\x13\x03\x02\x02\x02^_\x07\x03" +
		"\x02\x02_\x15\x03\x02\x02\x02\v\x1C#(.4AEQU";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!QueryParser.__ATN) {
			QueryParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(QueryParser._serializedATN));
		}

		return QueryParser.__ATN;
	}

}

export class InputContext extends ParserRuleContext {
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public EOF(): TerminalNode { return this.getToken(QueryParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_input; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterInput) {
			listener.enterInput(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitInput) {
			listener.exitInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitInput) {
			return visitor.visitInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public ignored(): IgnoredContext[];
	public ignored(i: number): IgnoredContext;
	public ignored(i?: number): IgnoredContext | IgnoredContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IgnoredContext);
		} else {
			return this.getRuleContext(i, IgnoredContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_query; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitQuery) {
			return visitor.visitQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IgnoredContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryParser.ID);
		} else {
			return this.getToken(QueryParser.ID, i);
		}
	}
	public WORD(): TerminalNode[];
	public WORD(i: number): TerminalNode;
	public WORD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryParser.WORD);
		} else {
			return this.getToken(QueryParser.WORD, i);
		}
	}
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryParser.STRING);
		} else {
			return this.getToken(QueryParser.STRING, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryParser.COMMA);
		} else {
			return this.getToken(QueryParser.COMMA, i);
		}
	}
	public OB(): TerminalNode[];
	public OB(i: number): TerminalNode;
	public OB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryParser.OB);
		} else {
			return this.getToken(QueryParser.OB, i);
		}
	}
	public CB(): TerminalNode[];
	public CB(i: number): TerminalNode;
	public CB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryParser.CB);
		} else {
			return this.getToken(QueryParser.CB, i);
		}
	}
	public SPECIAL(): TerminalNode[];
	public SPECIAL(i: number): TerminalNode;
	public SPECIAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryParser.SPECIAL);
		} else {
			return this.getToken(QueryParser.SPECIAL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_ignored; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterIgnored) {
			listener.enterIgnored(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitIgnored) {
			listener.exitIgnored(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitIgnored) {
			return visitor.visitIgnored(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public pickParam(): PickParamContext | undefined {
		return this.tryGetRuleContext(0, PickParamContext);
	}
	public arrayPickParam(): ArrayPickParamContext | undefined {
		return this.tryGetRuleContext(0, ArrayPickParamContext);
	}
	public scalarParam(): ScalarParamContext | undefined {
		return this.tryGetRuleContext(0, ScalarParamContext);
	}
	public arrayParam(): ArrayParamContext | undefined {
		return this.tryGetRuleContext(0, ArrayParamContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_param; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterParam) {
			listener.enterParam(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitParam) {
			listener.exitParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScalarParamContext extends ParserRuleContext {
	public SINGULAR_PARAM_MARK(): TerminalNode { return this.getToken(QueryParser.SINGULAR_PARAM_MARK, 0); }
	public paramName(): ParamNameContext {
		return this.getRuleContext(0, ParamNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_scalarParam; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterScalarParam) {
			listener.enterScalarParam(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitScalarParam) {
			listener.exitScalarParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitScalarParam) {
			return visitor.visitScalarParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PickParamContext extends ParserRuleContext {
	public SINGULAR_PARAM_MARK(): TerminalNode { return this.getToken(QueryParser.SINGULAR_PARAM_MARK, 0); }
	public paramName(): ParamNameContext {
		return this.getRuleContext(0, ParamNameContext);
	}
	public OB(): TerminalNode { return this.getToken(QueryParser.OB, 0); }
	public pickKey(): PickKeyContext[];
	public pickKey(i: number): PickKeyContext;
	public pickKey(i?: number): PickKeyContext | PickKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PickKeyContext);
		} else {
			return this.getRuleContext(i, PickKeyContext);
		}
	}
	public CB(): TerminalNode { return this.getToken(QueryParser.CB, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryParser.COMMA);
		} else {
			return this.getToken(QueryParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_pickParam; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterPickParam) {
			listener.enterPickParam(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitPickParam) {
			listener.exitPickParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitPickParam) {
			return visitor.visitPickParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayPickParamContext extends ParserRuleContext {
	public PLURAL_PARAM_MARK(): TerminalNode { return this.getToken(QueryParser.PLURAL_PARAM_MARK, 0); }
	public paramName(): ParamNameContext {
		return this.getRuleContext(0, ParamNameContext);
	}
	public OB(): TerminalNode { return this.getToken(QueryParser.OB, 0); }
	public pickKey(): PickKeyContext[];
	public pickKey(i: number): PickKeyContext;
	public pickKey(i?: number): PickKeyContext | PickKeyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PickKeyContext);
		} else {
			return this.getRuleContext(i, PickKeyContext);
		}
	}
	public CB(): TerminalNode { return this.getToken(QueryParser.CB, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(QueryParser.COMMA);
		} else {
			return this.getToken(QueryParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_arrayPickParam; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterArrayPickParam) {
			listener.enterArrayPickParam(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitArrayPickParam) {
			listener.exitArrayPickParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitArrayPickParam) {
			return visitor.visitArrayPickParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayParamContext extends ParserRuleContext {
	public PLURAL_PARAM_MARK(): TerminalNode { return this.getToken(QueryParser.PLURAL_PARAM_MARK, 0); }
	public paramName(): ParamNameContext {
		return this.getRuleContext(0, ParamNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_arrayParam; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterArrayParam) {
			listener.enterArrayParam(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitArrayParam) {
			listener.exitArrayParam(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitArrayParam) {
			return visitor.visitArrayParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamNameContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(QueryParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_paramName; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterParamName) {
			listener.enterParamName(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitParamName) {
			listener.exitParamName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitParamName) {
			return visitor.visitParamName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PickKeyContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(QueryParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return QueryParser.RULE_pickKey; }
	// @Override
	public enterRule(listener: QueryParserListener): void {
		if (listener.enterPickKey) {
			listener.enterPickKey(this);
		}
	}
	// @Override
	public exitRule(listener: QueryParserListener): void {
		if (listener.exitPickKey) {
			listener.exitPickKey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: QueryParserVisitor<Result>): Result {
		if (visitor.visitPickKey) {
			return visitor.visitPickKey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


