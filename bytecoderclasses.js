const bytecoder = {
    imports: {
        "java.lang.System": {
            J$currentTimeMillis$$: function () {
                return Date.now();
            },
        },
        "java.lang.Object": {
            Ljava$lang$Class$$getClass$$: function (inst) {
                return inst.constructor.$rt;
            },
        },
        "java.lang.NullPointerException": {
            Ljava$lang$String$$getExtendedNPEMessage$$: function(inst) {
                return null;
            }
        },
        "jdk.internal.misc.ScopedMemoryAccess": {
            V$registerNatives$$: function () {
            },
        },
        "java.lang.Float": {
            I$floatToRawIntBits$F: function (value) {
                let fl = new Float32Array(1);
                fl[0] = value;
                let br = new Int32Array(fl.buffer);
                return br[0];
            },
            Z$isNaN$D: function (a) {
                return isNaN(a) ? 1 : 0
            },
            Z$isNaN$F: function (a) {
                return isNaN(a) ? 1 : 0
            },
            Z$isInfinite$F: function (a) {
                return (a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY) ? 1 : 0
            },
            Ljava$lang$String$$toString$F: function (value) {
                let str = value.toString();
                if (str.indexOf(".") < 0) {
                    str += '.0';
                }
                return bytecoder.toBytecoderString(str);
            },
            F$parseFloat$Ljava$lang$String$: function (value) {
                return parseFloat(value.nativeObject);
            },
        },
        "java.lang.Math": {
            I$min$I$I: function (a, b) {
                return Math.min(a, b);
            },
            J$min$J$J: function (a, b) {
                return Math.min(a, b);
            },
            D$min$D$D: function (a, b) {
                return Math.min(a, b);
            },
            F$min$F$F: function (a, b) {
                return Math.min(a, b);
            },
            D$max$D$D: function (a, b) {
                return Math.max(a, b);
            },
            I$max$I$I: function (a, b) {
                return Math.max(a, b);
            },
            J$max$J$J: function (a, b) {
                return Math.max(a, b);
            },
            D$floor$D: function (a) {
                return Math.floor(a);
            },
            F$floor$F: function (a) {
                return Math.floor(a);
            },
            D$ceil$D: function (a) {
                return Math.ceil(a);
            },
            F$ceil$F: function (a) {
                return Math.ceil(a);
            },
            D$toRadians$D: function (a) {
                return a * (Math.PI / 180.0);
            },
            D$toDegrees$D: function (a) {
                return a * (180. / Math.PI);
            },
            D$cos$D: function (a) {
                return Math.cos(a);
            },
            D$sin$D: function (a) {
                return Math.sin(a);
            },
            D$tan$D: function (a) {
                return Math.tan(a);
            },
            D$sqrt$D: function (a) {
                return Math.sqrt(a);
            },
            D$cbrt$D: function (a) {
                return Math.cbrt(a);
            },
            D$log$D: function (a) {
                return Math.log(a);
            },
            D$random$$: function () {
                return Math.random();
            },
        },
        "java.lang.StrictMath": {
            D$sqrt$D: function (a) {
                return Math.sqrt(a);
            },
            I$round$F: function(a) {
                return Math.round(a);
            },
            D$sin$D: function(a) {
                return Math.sin(a);
            },
            D$cos$D: function(a) {
                return Math.sin(a);
            }
        },
        "java.lang.reflect.Array": {
            Ljava$lang$Object$$newArray$Ljava$lang$Class$$I: function (t, l) {
                return bytecoder.newarray(l, null);
            },
        },
        "jdk.internal.misc.CDS": {
            Z$isDumpingClassList0$$: function () {
                return 0;
            },
            Z$isDumpingArchive0$$: function () {
                return 0;
            },
            Z$isSharingEnabled0$$: function () {
                return 0;
            },
            V$initializeFromArchive$Ljava$lang$Class$: function (cls) {
            },
            J$getRandomSeedForDumping$$: function(cls) {
                return Math.trunc(Math.random() * 10000000);
            },
        },
        "java.io.UnixFileSystem": {
            I$getBooleanAttributes0$Ljava$lang$String$: function (fsref, path) {
                let jsPath = bytecoder.toJSString(path);
                try {
                    let request = new XMLHttpRequest();
                    request.open('HEAD', jsPath, false);
                    request.send(null);
                    if (request.status === 200) {
                        let length = request.getResponseHeader('content-length');
                        return 0x01;
                    }
                    return 0;
                } catch (e) {
                    return 0;
                }
            },
        },
        "java.lang.Class": {
            Ljava$lang$ClassLoader$$getClassLoader$$: function (classRef) {
                return null;
            },
            Ljava$lang$Class$$forName$Ljava$lang$String$$Z$Ljava$lang$ClassLoader$: function (className, initialize, classLoader) {
                throw new Error('Not supported class for reflective access');
            },
            Z$desiredAssertionStatus$$: function(classRef) {
                return false;
            },
            Ljava$lang$String$$getName$$: function (classRef) {
                //I am probably missing some knowledge here. This does work but it seems that @EmulateAtRuntime should do that for me?
                return classRef.Ljava$lang$String$$getName$$();
            },
        },
        "java.io.FileInputStream": {
            I$open0$Ljava$io$FileDescriptor$$Ljava$lang$String$: function (fis, fdd, name) {
                let fd = bytecoder.openForRead(bytecoder.toJSString(name));
                if (fd >= 0) {
                    bytecoder.exports["setFileDescriptorHandle"].call(fdd, fd);
                }
                return fd;
            },
            J$skip0$Ljava$io$FileDescriptor$$I: function (fis, fdd, amount) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                return x.J$skip0$I(fd, amount);
            },
            I$available0$Ljava$io$FileDescriptor$: function (fis, fdd) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                return x.I$available0$$(fd);
            },
            I$read0$Ljava$io$FileDescriptor$: function (fis, fdd) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                return x.I$read0$$(fd);
            },
            I$readBytes$Ljava$io$FileDescriptor$$$B$I$I: function (fis, fdd, b, off, len) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                return x.I$readBytes$$B$I$I(fd, b, off, len);
            },
        },
        "java.io.FileOutputStream": {
            V$writeBytes$Ljava$io$FileDescriptor$$$B$I$I: function (fis, fdd, b, off, len) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                x.V$writeBytes$$B$I$I(fd, b, off, len);
            },
            V$writeInt$Ljava$io$FileDescriptor$$I: function (fis, fdd, cp) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                x.V$writeInt$I(fd, cp);
            },
            V$close0$Ljava$io$FileDescriptor$: function(fis, fdd) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                bytecoder.filehandles[fd] = null;
            }
        },
        "de.mirkosertic.bytecoder.classlib.BytecoderCharsetDecoder": {
            $C$decodeFromBytes$Ljava$lang$String$$$B: function (decoder, charsetName, data) {
                let targetCharacterSet = charsetName.nativeObject;
                let byteData = new Uint8Array(data.data);
                let dec = new TextDecoder(targetCharacterSet);

                let str = dec.decode(byteData);

                let charArray = bytecoder.newarray(str.length, 0);
                for (let i = 0; i < str.length; i++) {
                    charArray.data[i] = str.codePointAt(i);
                }
                return charArray;
            },
        },
        "de.mirkosertic.bytecoder.classlib.BytecoderCharsetEncoder": {
            $B$encodeToBytes$Ljava$lang$String$$$C: function (encoder, charsetName, data) {
                let str = '';
                for (var i = 0; i < data.data.length; i++) {
                    str += String.fromCodePoint(data.data[i]);
                }

                let targetCharacterSet = charsetName.nativeObject;
                if (targetCharacterSet !== 'UTF-8') {
                    throw 'Not supported character set!';
                }

                let enc = new TextEncoder();
                let byteData = enc.encode(str);

                let bytes = bytecoder.newarray(byteData.length, 0);
                for (var i = 0; i < byteData.length; i++) {
                    bytes.data[i] = byteData[i];
                }

                return bytes;
            },
        },
        "java.lang.StringBuffer": {
            V$initializeWith$I: function (buffer, size) {
                buffer.nativeObject = '';
            },
            Ljava$lang$StringBuffer$$append$Ljava$lang$String$: function (buffer, str) {
                buffer.nativeObject += str.nativeObject;
            },
            Ljava$lang$String$$toString$$: function (buffer) {
                return bytecoder.toBytecoderString(buffer.nativeObject);
            },
        },
        "java.lang.StringBuilder": {
            V$initializeWith$I: function (builder, size) {
                builder.nativeObject = '';
            },
            Ljava$lang$StringBuilder$$append$Ljava$lang$String$: function (builder, str) {
                builder.nativeObject += str.nativeObject;
                return builder;
            },
            Ljava$lang$StringBuilder$$append$Ljava$lang$CharSequence$$I$I: function (builder, str, start, end) {
                builder.nativeObject += str.nativeObject.substring(start, end);
                return builder;
            },
            Ljava$lang$String$$toString$$: function (builder) {
                return bytecoder.toBytecoderString(builder.nativeObject);
            },
            I$length$$: function (builder) {
                return builder.nativeObject.length;
            },
            V$setLength$I: function (builder, size) {
            },
            Ljava$lang$StringBuilder$$append$$C$I$I: function (builder, chars, offset, count) {
                for (let i = offset; i < offset + count; i++) {
                    builder.nativeObject += String.fromCodePoint(chars.data[i]);
                }
                return builder;
            },
            Ljava$lang$StringBuilder$$deleteCharAt$I: function(builder, index) {
                const current = builder.nativeObject;
                builder.nativeObject = current.slice(0, index) + current.slice(index + 1);
                return builder;
            },
            V$setCharAt$I$C: function(builder, index, char) {
                const current = builder.nativeObject;
                builder.nativeObject = current.slice(0, index) + String.fromCodePoint(char) + current.slice(index + 1);
            },
            Ljava$lang$StringBuilder$$insert$I$C: function(builder, index, char) {
                const current = builder.nativeObject;
                builder.nativeObject = current.slice(0, index) + String.fromCodePoint(char) + current.slice(index);
                return builder
            },
            C$charAt$I: function(builder, index) {
                const current = builder.nativeObject;
                return current.codePointAt(index);
            }
        },
        "java.lang.String": {
            C$charAt$I: function (str, index) {
                return str.nativeObject.codePointAt(index);
            },
            I$length$$: function (str) {
                return str.nativeObject.length;
            },
            Z$matches$Ljava$lang$String$: function (self, regex) {
                var match = RegExp(regex.nativeObject).exec(self.nativeObject);
                if(!match)
                    return false;
                return match[0].length == self.nativeObject.length;
            },
            Z$contains$Ljava$lang$CharSequence$: function (str, sub) {
                return str.nativeObject.includes(sub);
            },
            V$getChars$I$I$$C$I: function (str, srcBegin, srcEnd, dst, dstBegin) {
                let dstOffset = dstBegin;
                let s = str.nativeObject;
                for (let i = srcBegin; i < srcEnd; i++) {
                    dst.data[dstOffset] = s.codePointAt(i);
                    dstOffset++;
                }
            },
            I$indexOf$I: function (str, cp) {
                if (cp >= 0) {
                    return str.nativeObject.indexOf(String.fromCodePoint(cp));
                }
                return -1;
            },
            I$lastIndexOf$I: function (str, cp) {
                if (cp >= 0) {
                    const a = bytecoder.toJSString(str);
                    return a.lastIndexOf(String.fromCodePoint(cp));
                }
                return -1;
            },
            Z$startsWith$Ljava$lang$String$: function (str, otherstr) {
                const a = bytecoder.toJSString(str);
                const b = bytecoder.toJSString(otherstr);
                if (a.startsWith(b)) {
                    return 1;
                }
                return 0;
            },
            Z$endsWith$Ljava$lang$String$: function (str, otherstr) {
                const a = bytecoder.toJSString(str);
                const b = bytecoder.toJSString(otherstr);
                if (a.endsWith(b)) {
                    return 1;
                }
                return 0;
            },
            Ljava$lang$String$$replaceAll$Ljava$lang$String$$Ljava$lang$String$(str, regex, replacement) {
                return str;
            },
            I$lastIndexOf$Ljava$lang$String$: function (str, s) {
                return str.nativeObject.lastIndexOf(s.nativeObject);
            },
            Ljava$lang$String$$trim$$: function (str) {
                return bytecoder.toBytecoderString(str.nativeObject.trim());
            },
            Ljava$lang$String$$substring$I: function(str, i) {
                return bytecoder.toBytecoderString(str.nativeObject.substring(i));
            },
            Ljava$lang$String$$substring$I$I: function(str, i, b) {
                return bytecoder.toBytecoderString(str.nativeObject.substring(i, b));
            },
            Ljava$lang$String$$repeat$I: function (str, amount) {
                return bytecoder.toBytecoderString(str.nativeObject.repeat(amount));
            },
            Z$equals0$Ljava$lang$String$: function (str, otherstr) {
                if (str.nativeObject === otherstr.nativeObject) {
                    return 1;
                }
                return 0;
            },
            Z$equalsIgnoreCase$Ljava$lang$String$: function (str, otherstr) {
                if (str == null) {
                    return 0;
                }
                if (otherstr == null) {
                    return 0;
                }
                if (str.nativeObject.toUpperCase() === otherstr.nativeObject.toUpperCase()) {
                    return 1;
                }
                return 0;
            },
            V$initializeWith$$C$I$I: function (str, chars, offset, count) {
                str.nativeObject = '';
                for (let i = offset; i < offset + count; i++) {
                    str.nativeObject += String.fromCodePoint(chars.data[i]);
                }
            },
            V$initializeWith$$I$I$I: function (str, points, offset, count) {
                str.nativeObject = '';
                for (let i = offset; i < offset + count; i++) {
                    str.nativeObject += String.fromCodePoint(points.data[i]);
                }
            },
            $C$toCharArray$$: function (str) {
                let arr = bytecoder.newarray(str.nativeObject.length, 0);
                for (let i = 0; i < str.nativeObject.length; i++) {
                    arr.data[i] = str.nativeObject.codePointAt(i);
                }
                return arr;
            },
            V$initializeWith$Ljava$lang$String$: function (str, otherstr) {
                str.nativeObject = otherstr.nativeObject;
            },
            V$initializeWith$$B$I$I$B: function(str, bytes, index, count, coder) {
                const arr = new Uint8Array(bytecoder.exports.byteArrayLength(bytes))
                for (var i = index; i < index + count; i++) {
                    arr[i - index] = bytecoder.exports.getByteArrayEntry(bytes, i);
                }
                const jsstr = new TextDecoder().decode(arr);
                str.nativeObject = jsstr;
            },
            $B$getBytes$$: function(str) {
                const jsstr = str.nativeObject;
                const bytes = new TextEncoder().encode(jsstr);

                const arr = bytecoder.exports.newByteArray(bytes.length);
                for (var i = 0; i < bytes.length; i++) {
                    bytecoder.exports.setByteArrayEntry(arr, i, bytes[i]);
                }

                return arr;
            },
            Ljava$lang$String$$toUpperCase$$: function(str) {
                return bytecoder.toBytecoderString(str.nativeObject.toUpperCase());
            },
            Ljava$lang$String$$toLowerCase$$: function(str) {
                return bytecoder.toBytecoderString(str.nativeObject.toLowerCase());
            }
        },
        "java.lang.Character": {
            Z$isDigit$C: function (char) {
                if ("0123456789".indexOf(String.fromCodePoint(char)) >= 0) {
                    return 1;
                }
                return 0;
            },
            Z$isLowerCase$C: function (char) {
                let str = String.fromCodePoint(char);
                if (str.toLowerCase() === str) {
                    return 1;
                }
                return 0;
            },
            Z$isUpperCase$C: function (char) {
                let str = String.fromCodePoint(char);
                if (str.toUpperCase() === str) {
                    return 1;
                }
                return 0;
            },
            C$toLowerCase$C: function (char) {
                let str = String.fromCodePoint(char).toLowerCase();
                return str.codePointAt(0);
            },
            C$toUpperCase$C: function (char) {
                let str = String.fromCodePoint(char).toUpperCase();
                return str.codePointAt(0);
            },
            I$digit$C$I: function (char, radix) {
                let str = String.fromCodePoint(char).toUpperCase();
                if ('0' === str) {
                    return 0;
                }
                if ('1' === str) {
                    return 1;
                }
                if ('2' === str) {
                    return 2;
                }
                if ('3' === str) {
                    return 3;
                }
                if ('4' === str) {
                    return 4;
                }
                if ('5' === str) {
                    return 5;
                }
                if ('6' === str) {
                    return 6;
                }
                if ('7' === str) {
                    return 7;
                }
                if ('8' === str) {
                    return 8;
                }
                if ('9' === str) {
                    return 9;
                }
                if ('A' === str) {
                    return 10;
                }
                if ('B' === str) {
                    return 11;
                }
                if ('C' === str) {
                    return 12;
                }
                if ('D' === str) {
                    return 13;
                }
                if ('E' === str) {
                    return 14;
                }
                if ('15' === str) {
                    return 15;
                }
                return -1;
            },
            Ljava$lang$String$$toString$C: function (char) {
                return bytecoder.toBytecoderString(String.fromCodePoint(char));
            },
        },
        "java.lang.Byte": {
            Ljava$lang$String$$toString$B$I: function (value, radix) {
                return bytecoder.toBytecoderString(value.toString(radix));
            },
            B$parseByte$Ljava$lang$String$: function (str) {
                return parseInt(str.nativeObject);Ljava$lang$String$$replaceAll$Ljava$lang$String$$Ljava$lang$String$
            },
        },
        "java.lang.Short": {
            Ljava$lang$String$$toString$S$I: function (value, radix) {
                return bytecoder.toBytecoderString(value.toString(radix));
            },
            S$parseShort$Ljava$lang$String$$I: function (value, radix) {
                return parseInt(value.nativeObject, radix);
            },
        },
        "java.lang.Integer": {
            Ljava$lang$String$$toString$I$I: function (value, radix) {
                return bytecoder.toBytecoderString(value.toString(radix));
            },
            Ljava$lang$String$$toHexString$I: function (value) {
                return bytecoder.toBytecoderString(value.toString(16));
            },
            I$parseInt$Ljava$lang$String$$I: function (value, radix) {
                return parseInt(value.nativeObject, radix);
            },
        },
        "java.lang.Long": {
            Ljava$lang$String$$toString$J$I: function (value, radix) {
                return bytecoder.toBytecoderString(value.toString(radix));
            },
            J$parseLong$Ljava$lang$String$$I: function (value, radix) {
                return parseInt(value.nativeObject, radix);
            },
        },
        "java.lang.Double": {
            Ljava$lang$String$$toString$D: function (value) {
                let str = value.toString();
                if (str.indexOf(".") < 0) {
                    str += '.0';
                }
                return bytecoder.toBytecoderString(str);
            },
            D$parseDouble$Ljava$lang$String$: function (str) {
                return parseFloat(str.nativeObject);
            },
            Z$isNaN$D: function (d) {
                return isNaN(d) ? 1 : 0;
            },
            Z$isInfinite$D: function (d) {
                return isFinite(d) ? 1 : 0;
            }
        },
        "runtime": {
            nativeconsole: function() {
                return console;
            },
            nativewindow: function() {
                return window;
            },
            nativedocument: function() {
                return document;
            }
        },
        "de.mirkosertic.bytecoder.api.web.OpaqueArrays": {
            Lde$mirkosertic$bytecoder$api$web$FloatArray$$createFloatArray$I: function(length) {
                return new Float32Array(length);
            },
            'Lde$mirkosertic$bytecoder$api$web$IntArray$$createIntArray$I': function(length) {
                return new Int32Array(length);
            },
            'Lde$mirkosertic$bytecoder$api$web$Int16Array$$createInt16Array$I': function(length) {
                return new Int16Array(length);
            },
            'Lde$mirkosertic$bytecoder$api$web$Int8Array$$createInt8Array$I': function(length) {
                return new Int8Array(length);
            },
            'Lde$mirkosertic$bytecoder$api$web$OpaqueReferenceArray$$createObjectArray$$': function(length) {
                return [];
            }
        },
        "java.time.ZoneId": {
            Ljava$lang$String$$defaultZoneId$$: function() {
                return bytecoder.toBytecoderString(Intl.DateTimeFormat().resolvedOptions().timeZone);
            },
            I$zoneOffsetFor$Ljava$lang$String$: function(zoneId) {
                // TODO
                return 0;
            }
        },
    },
    exports: {},
    filehandles : [],
    stringconstants: [],
    generated: [],
    cmp: function(a,b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    },
    instanceOf: function(a,b) {
        if (a) {
            let rt = a.constructor.$rt;
            return rt.instanceOf(a, b);
        }
        return 0;
    },
    registerStack: function(exception, stack) {
        exception.stack = stack;
        return exception;
    },
    toJSString: function(str) {
        if (str) {
            return str.nativeObject;
        }
        return '';
    },
    newarray: function(len, defaultvalue) {
        let x = new de$mirkosertic$bytecoder$classlib$Array();
        x.data = new Array(len);
        x.data.fill(defaultvalue);
        return x;
    },
    toBytecoderString: function(jsstring) {
        const x = new java$lang$String();
        x.V$$init$$$.call(x);
        x.nativeObject = jsstring;
        return x;
    },
    toBytecoderBoolean: function(v) {
        return v ? 1: 0;
    },
    instanceWithLambdaImpl: function(instType, lambdaImpl) {
        let inst = new instType();
        inst.$lambdaimpl = lambdaImpl.bind(inst);
        return inst;
    },
    primitives: {
        byte: {
        },
        char: {
        },
        short: {
        },
        int: {
        },
        float: {
        },
        double: {
        },
        long: {
        },
        boolean: {
        },
        void: {
        }
    },
    openForRead :  function(path) {
        try {
            let request = new XMLHttpRequest();
            request.open('GET',path,false);
            request.overrideMimeType('text/plain; charset=x-user-defined');
            request.send(null);
            if (request.status === 200) {
                let length = request.getResponseHeader('content-length');
                let responsetext = request.response;
                let buf = new ArrayBuffer(responsetext.length);
                let bufView = new Uint8Array(buf);
                let i = 0;
                const strLen = responsetext.length;
                for (; i < strLen; i++) {
                    bufView[i] = responsetext.charCodeAt(i) & 0xff;
                }
                let handle = bytecoder.filehandles.length;
                bytecoder.filehandles[handle] = {
                    currentpos: 0,
                    data: bufView,
                    size: length,
                    J$skip0$I: function(fd, amount) {
                        let remaining = this.size - this.currentpos;
                        let possible = Math.min(remaining, amount);
                        this.currentpos += possible;
                        return possible;
                    },
                    I$available0$$: function(fd) {
                        return this.size - this.currentpos;
                    },
                    I$read0$$: function(fd) {
                        return this.data[this.currentpos++];
                    },
                    I$readBytes$$B$I$I: function(fd, target, offset, length) {
                        if (length === 0) {return 0;}
                        let remaining = this.size - this.currentpos;
                        let possible = Math.min(remaining, length);
                        if (possible === 0) {return -1;}
                        for (let j=0; j<possible; j++) {
                            target.data[offset++] = this.data[this.currentpos++];
                        }
                        return possible;
                    }
                };
                return handle;
            }
            return -1;
        } catch(e) {
            return -1;
        }
    },
    newRuntimeClassFor: function (type,javaName, supportedtypes) {
        return {
            Ljava$lang$ClassLoader$$getClassLoader$$: function() {
                return null;
            },
            Ljava$lang$ClassLoader$$getClassLoader0$$: function() {
                return null;
            },
            Z$desiredAssertionStatus$$: function() {
                return false;
            },
            Ljava$lang$Object$$newInstance$$: function() {
                const x = new type.$i();
                x.V$$init$$$();
                return x;
            },
            $Ljava$lang$Object$$getEnumConstants$$: function() {
                return type.$i.$VALUES;
            },
            Ljava$lang$String$$getName$$: function () {
                return bytecoder.toBytecoderString(javaName);
            },
            Z$equals$Ljava$lang$Object$: function (self, obj) {
                return this.Ljava$lang$String$$getName$$(self).nativeObject == this.Ljava$lang$String$$getName$$(obj).nativeObject
            },
            instanceOf: function (a, b) {
                if (supportedtypes.includes(b)) {
                    return 1;
                }
                return 0;
            },
        };
    },
    wrapNativeIntoTypeInstance: function(instType, value) {
        let inst = new instType();
        inst.nativeObject = value;
        return inst;
    }
};

bytecoder.filehandles[1] = {
    V$writeBytes$$B$I$I: function(fd, b, off, len) {
        let decoder = new TextDecoder();
        let arr = new Uint8Array(b.data.slice(off, off +  len));
        console.log(decoder.decode(arr).replace('\n', ''));
    },
    V$writeInt$I: function(fd, cp) {
        let decoder = new TextDecoder();
        let arr = new Uint8Array([cp]);
        console.log(decoder.decode(arr).replace('\n', ''));
    },
};

bytecoder.imports["java.lang.Class"]["Ljava$lang$Class$$forName$Ljava$lang$String$$Z$Ljava$lang$ClassLoader$"] = function(className, initialize, classLoader) {
  throw new Error('Not supported class for reflective access');
};


class java$lang$Object {
  nativeObject = null;
  constructor() {
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Object,
        'java.lang.Object',
         [java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$String$$toString$$() {
    return bytecoder.stringconstants[1];
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if (th != arg0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  V$$init$$$() {
    return;
  }

  I$hashCode$$() {
    return 0;
  }
}


class java$lang$Readable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Readable,
        'java.lang.Readable',
         [java$lang$Readable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$nio$charset$CodingErrorAction extends java$lang$Object {
  nativeObject = null;

  name = null;
  static IGNORE = null;
  static REPLACE = null;
  static REPORT = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$charset$CodingErrorAction,
        'java.nio.charset.CodingErrorAction',
         [java$nio$charset$CodingErrorAction,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    java$nio$charset$CodingErrorAction.$i;
    var0 = new java$nio$charset$CodingErrorAction();
    java$nio$charset$CodingErrorAction.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[9]);
    java$nio$charset$CodingErrorAction.IGNORE = var0;
    var1 = new java$nio$charset$CodingErrorAction();
    java$nio$charset$CodingErrorAction.prototype.V$$init$$Ljava$lang$String$.call(var1,bytecoder.stringconstants[10]);
    java$nio$charset$CodingErrorAction.REPLACE = var1;
    var2 = new java$nio$charset$CodingErrorAction();
    java$nio$charset$CodingErrorAction.prototype.V$$init$$Ljava$lang$String$.call(var2,bytecoder.stringconstants[11]);
    java$nio$charset$CodingErrorAction.REPORT = var2;
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.name = arg0;
    return;
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    return (th.name);
  }
}


class java$util$function$BiFunction extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$function$BiFunction,
        'java.util.function.BiFunction',
         [java$util$function$BiFunction,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$$Ljava$lang$Object$ = impl;
  }
}


class java$util$Dictionary extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Dictionary,
        'java.util.Dictionary',
         [java$util$Dictionary,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$io$Flushable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$Flushable,
        'java.io.Flushable',
         [java$io$Flushable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$CharSequence extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$CharSequence,
        'java.lang.CharSequence',
         [java$lang$CharSequence,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.I$length$$ = impl;
  }

  Z$isEmpty$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.I$length$$()) != 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }
}


class jdk$internal$misc$Unsafe extends java$lang$Object {
  nativeObject = null;

  static INSTANCE = null;
  static ARRAY_BOOLEAN_INDEX_SCALE = 0;
  static ARRAY_BYTE_INDEX_SCALE = 0;
  static ARRAY_CHAR_INDEX_SCALE = 0;
  static ARRAY_SHORT_INDEX_SCALE = 0;
  static ARRAY_INT_INDEX_SCALE = 0;
  static ARRAY_LONG_INDEX_SCALE = 0;
  static ARRAY_FLOAT_INDEX_SCALE = 0;
  static ARRAY_DOUBLE_INDEX_SCALE = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$misc$Unsafe,
        'jdk.internal.misc.Unsafe',
         [jdk$internal$misc$Unsafe,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    jdk$internal$misc$Unsafe.$i;
    var0 = new jdk$internal$misc$Unsafe();
    jdk$internal$misc$Unsafe.prototype.V$$init$$$.call(var0);
    jdk$internal$misc$Unsafe.INSTANCE = var0;
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  static Ljdk$internal$misc$Unsafe$$getUnsafe$$() {
    jdk$internal$misc$Unsafe.$i;
    return (jdk$internal$misc$Unsafe.INSTANCE);
  }

  I$arrayBaseOffset$Ljava$lang$Class$(arg0) {
    return 0;
  }

  I$arrayIndexScale$Ljava$lang$Class$(arg0) {
    return 0;
  }

  Z$isBigEndian$$() {
    return 0;
  }

  V$storeFence$$() {
    return;
  }

  J$getLongUnaligned$Ljava$lang$Object$$J(arg0,arg1) {
    return arg1;
  }

  I$getIntUnaligned$Ljava$lang$Object$$J(arg0,arg1) {
    return (arg1 | 0);
  }

  V$copyMemory$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J(arg0,arg1,arg2,arg3,arg4) {
    return;
  }

  V$copySwapMemory$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J(arg0,arg1,arg2,arg3,arg4,arg5) {
    return;
  }
}


class com$example$wasm$GameEngine extends java$lang$Object {
  nativeObject = null;

  board = null;
  firstIndex = 0;
  secondIndex = 0;
  errorCount = 0;
  remainingTime = 0;
  rows = 0;
  columns = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        com$example$wasm$GameEngine,
        'com.example.wasm.GameEngine',
         [com$example$wasm$GameEngine,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    com$example$wasm$GameEngine.prototype.V$$init$$I$I.call(th,4,5);
    return;
  }

  V$$init$$I$I(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    java$util$ArrayList.$i;
    var1 = new java$util$ArrayList();
    java$util$ArrayList.prototype.V$$init$$$.call(var1);
    var0.board = var1;
    var2 = th;
    var2.firstIndex = -1;
    var3 = th;
    var3.secondIndex = -1;
    var4 = th;
    var4.errorCount = 0;
    var5 = th;
    var5.remainingTime = 60;
    var6 = th;
    var6.rows = arg0;
    var7 = th;
    var7.columns = arg1;
    com$example$wasm$GameEngine.prototype.V$initBoard$$.call(th);
    return;
  }

  V$initBoard$$() {
    var th = this;
    var var0 = 0;
    var phi1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    (th.board).V$clear$$();
    var0 = (Math.floor(((th.rows) * (th.columns)) / 2)) | 0;
    phi1 = (1) | 0;
    L1607688614: while(true) {
     if (phi1 > var0) {
      var8 = th;
      var8.errorCount = 0;
      var9 = th;
      var9.remainingTime = 60;
      var10 = th;
      var10.firstIndex = -1;
      var11 = th;
      var11.secondIndex = -1;
      return;
     } else {
      var2 = (th.board);
      var3 = new com$example$wasm$GameEngine$ModelCard();
      com$example$wasm$GameEngine$ModelCard.prototype.V$$init$$Ljava$lang$String$.call(var3,bytecoder.generated[0](null,phi1));
      var4 = (var2.Z$add$Ljava$lang$Object$(var3));
      var5 = (th.board);
      var6 = new com$example$wasm$GameEngine$ModelCard();
      com$example$wasm$GameEngine$ModelCard.prototype.V$$init$$Ljava$lang$String$.call(var6,bytecoder.generated[1](null,phi1));
      var7 = (var5.Z$add$Ljava$lang$Object$(var6));
      phi1 = ((phi1 + 1)) | 0;
      // Here was a goto statement
      continue L1607688614;
     }
    }
  }

  V$shuffle$$() {
    var th = this;
    var var0 = null;
    var0 = (th.board);
    java$util$Collections.$i;
    java$util$Collections.V$shuffle$Ljava$util$List$(var0);
    return;
  }
}


class jdk$internal$access$SharedSecrets extends java$lang$Object {
  nativeObject = null;

  static javaNioAccess = null;
  static javaIOPrintStreamAccess = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$access$SharedSecrets,
        'jdk.internal.access.SharedSecrets',
         [jdk$internal$access$SharedSecrets,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static V$setJavaNioAccess$Ljdk$internal$access$JavaNioAccess$(arg0) {
    jdk$internal$access$SharedSecrets.javaNioAccess = arg0;
    return;
  }

  static V$setJavaIOCPrintStreamAccess$Ljdk$internal$access$JavaIOPrintStreamAccess$(arg0) {
    jdk$internal$access$SharedSecrets.javaIOPrintStreamAccess = arg0;
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$lang$Comparable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Comparable,
        'java.lang.Comparable',
         [java$lang$Comparable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.I$compareTo$Ljava$lang$Object$ = impl;
  }
}


class jdk$internal$foreign$MemorySessionImpl extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$foreign$MemorySessionImpl,
        'jdk.internal.foreign.MemorySessionImpl',
         [jdk$internal$foreign$MemorySessionImpl,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$checkValidStateRaw$$() {
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$java$lang$TMath extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        de$mirkosertic$bytecoder$classlib$java$lang$TMath,
        'de.mirkosertic.bytecoder.classlib.java.lang.TMath',
         [de$mirkosertic$bytecoder$classlib$java$lang$TMath,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    de$mirkosertic$bytecoder$classlib$java$lang$TMath.$i;
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$lang$Math extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Math,
        'java.lang.Math',
         [java$lang$Math,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    java$lang$Math.$i;
    return;
  }

  static D$random$$() {
    return bytecoder.imports['java.lang.Math'].D$random$$();
  }

  static I$floorMod$I$I(arg0,arg1) {
    java$lang$Math.$i;
    return (arg0 - ((java$lang$Math.I$floorDiv$I$I(arg0,arg1)) * arg1));
  }

  static I$floorDiv$I$I(arg0,arg1) {
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var0 = (Math.floor(arg0 / arg1)) | 0;
    java$lang$Integer.$i;
    var1 = ((java$lang$Integer.I$signum$I(arg0))) | 0;
    If_12_0: {
     if (var1 == (java$lang$Integer.I$signum$I(arg1))) {
      phi2 = (var0) | 0;
      break If_12_0;
     } else {
      if ((var0 * arg1) == arg0) {
       phi2 = (var0) | 0;
       break If_12_0;
      } else {
       phi2 = ((var0 + -1)) | 0;
       break If_12_0;
      }
     }
    }
    return phi2;
  }

  static I$min$I$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Math'].I$min$I$I(arg0, arg1);
  }

  static I$max$I$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Math'].I$max$I$I(arg0, arg1);
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$nio$charset$CharsetEncoder extends java$lang$Object {
  nativeObject = null;

  static stateNames = null;
  malformedInputAction = null;
  unmappableCharacterAction = null;
  state = 0;
  cachedDecoder = null;
  charset = null;
  replacement = null;
  averageBytesPerChar = 0.0;
  maxBytesPerChar = 0.0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$charset$CharsetEncoder,
        'java.nio.charset.CharsetEncoder',
         [java$nio$charset$CharsetEncoder,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$nio$charset$CharsetEncoder.$i;
    var0 = bytecoder.newarray((4),null);
    var0.data[0] = bytecoder.stringconstants[5];
    var0.data[1] = bytecoder.stringconstants[6];
    var0.data[2] = bytecoder.stringconstants[7];
    var0.data[3] = bytecoder.stringconstants[8];
    java$nio$charset$CharsetEncoder.stateNames = var0;
    return;
  }

  V$$init$$Ljava$nio$charset$Charset$$F$F(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    var0 = bytecoder.newarray((1),0);
    var0.data[0] = 63;
    java$nio$charset$CharsetEncoder.prototype.V$$init$$Ljava$nio$charset$Charset$$F$F$$B.call(th,arg0,arg1,arg2,var0);
    return;
  }

  V$$init$$Ljava$nio$charset$Charset$$F$F$$B(arg0,arg1,arg2,arg3) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    java$nio$charset$CodingErrorAction.$i;
    var0.malformedInputAction = (java$nio$charset$CodingErrorAction.REPORT);
    var1 = th;
    var1.unmappableCharacterAction = (java$nio$charset$CodingErrorAction.REPORT);
    var2 = th;
    var2.state = 0;
    var3 = th;
    var3.cachedDecoder = null;
    var4 = th;
    var4.charset = arg0;
    if (arg1 > 0.0) {
     if (arg2 > 0.0) {
      if (arg1 <= arg2) {
       var8 = th;
       var8.replacement = arg3;
       var9 = th;
       var9.averageBytesPerChar = arg1;
       var10 = th;
       var10.maxBytesPerChar = arg2;
       var11 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$CharsetEncoder$$replaceWith$$B.call(th,arg3));
       return;
      } else {
       var7 = new java$lang$IllegalArgumentException();
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var7,bytecoder.stringconstants[14]);
       throw bytecoder.registerStack(var7, new Error().stack);
      }
     } else {
      var6 = new java$lang$IllegalArgumentException();
      java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var6,bytecoder.stringconstants[13]);
      throw bytecoder.registerStack(var6, new Error().stack);
     }
    } else {
     var5 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var5,bytecoder.stringconstants[12]);
     throw bytecoder.registerStack(var5, new Error().stack);
    }
  }

  Ljava$nio$charset$CharsetEncoder$$replaceWith$$B(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    if (arg0 != null) {
     var1 = (arg0.data.length) | 0;
     if (var1 != 0) {
      if (var1 <= (th.maxBytesPerChar)) {
       if ((java$nio$charset$CharsetEncoder.prototype.Z$isLegalReplacement$$B.call(th,arg0)) != 0) {
        var5 = th;
        var6 = (arg0.data.length) | 0;
        java$util$Arrays.$i;
        var5.replacement = (java$util$Arrays.$B$copyOf$$B$I(arg0,var6));
        java$nio$charset$CharsetEncoder.prototype.V$implReplaceWith$$B.call(th,(th.replacement));
        return th;
       } else {
        var4 = new java$lang$IllegalArgumentException();
        java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var4,bytecoder.stringconstants[83]);
        throw bytecoder.registerStack(var4, new Error().stack);
       }
      } else {
       var3 = new java$lang$IllegalArgumentException();
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var3,bytecoder.stringconstants[17]);
       throw bytecoder.registerStack(var3, new Error().stack);
      }
     } else {
      var2 = new java$lang$IllegalArgumentException();
      java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var2,bytecoder.stringconstants[16]);
      throw bytecoder.registerStack(var2, new Error().stack);
     }
    } else {
     var0 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[15]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  Z$isLegalReplacement$$B(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var var12 = null;
    var var13 = .0;
    var var14 = null;
    var var15 = 0;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var phi19 = 0;
    var var20 = null;
    var0 = (th.cachedDecoder);
    If_7_0: {
     If_7_1: {
      if (var0 == null) {
       phi2 = null;
       break If_7_1;
      } else {
       var1 = (var0.Ljava$lang$Object$$get$$());
       if (var1 != null) {
        var20 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CharsetDecoder$$reset$$.call(var1));
        phi11 = var1;
        break If_7_0;
       } else {
        phi2 = var1;
        break If_7_1;
       }
      }
     }
     var3 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$Charset$$charset$$.call(th));
     var4 = (var3.Ljava$nio$charset$CharsetDecoder$$newDecoder$$());
     java$nio$charset$CodingErrorAction.$i;
     var5 = (java$nio$charset$CodingErrorAction.REPORT);
     var6 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CharsetDecoder$$onMalformedInput$Ljava$nio$charset$CodingErrorAction$.call(var4,var5));
     var7 = (java$nio$charset$CodingErrorAction.REPORT);
     var8 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CharsetDecoder$$onUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$.call(var4,var7));
     var9 = th;
     var10 = new java$lang$ref$WeakReference();
     java$lang$ref$WeakReference.prototype.V$$init$$Ljava$lang$Object$.call(var10,var4);
     var9.cachedDecoder = var10;
     phi11 = var4;
     break If_7_0;
    }
    java$nio$ByteBuffer.$i;
    var12 = (java$nio$ByteBuffer.Ljava$nio$ByteBuffer$$wrap$$B(arg0));
    var13 = (var12.I$remaining$$());
    var14 = phi11;
    var15 = (((var13 * (java$nio$charset$CharsetDecoder.prototype.F$maxCharsPerByte$$.call(var14))) | 0)) | 0;
    java$nio$CharBuffer.$i;
    var16 = (java$nio$CharBuffer.Ljava$nio$CharBuffer$$allocate$I(var15));
    var17 = phi11;
    var18 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CoderResult$$decode$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$$Z.call(var17,var12,var16,1));
    If_75_0: {
     if ((java$nio$charset$CoderResult.prototype.Z$isError$$.call(var18)) != 0) {
      phi19 = (0) | 0;
      break If_75_0;
     } else {
      phi19 = (1) | 0;
      break If_75_0;
     }
    }
    return phi19;
  }

  Ljava$nio$charset$Charset$$charset$$() {
    var th = this;
    return (th.charset);
  }

  Ljava$nio$charset$CharsetEncoder$$onMalformedInput$Ljava$nio$charset$CodingErrorAction$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    if (arg0 != null) {
     var1 = th;
     var1.malformedInputAction = arg0;
     java$nio$charset$CharsetEncoder.prototype.V$implOnMalformedInput$Ljava$nio$charset$CodingErrorAction$.call(th,arg0);
     return th;
    } else {
     var0 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[18]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$implOnMalformedInput$Ljava$nio$charset$CodingErrorAction$(arg0) {
    return;
  }

  Ljava$nio$charset$CharsetEncoder$$onUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    if (arg0 != null) {
     var1 = th;
     var1.unmappableCharacterAction = arg0;
     java$nio$charset$CharsetEncoder.prototype.V$implOnUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$.call(th,arg0);
     return th;
    } else {
     var0 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[18]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$implOnUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$(arg0) {
    return;
  }

  V$implReplaceWith$$B(arg0) {
    return;
  }
}


class java$lang$Runnable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Runnable,
        'java.lang.Runnable',
         [java$lang$Runnable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$reflect$Type extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$reflect$Type,
        'java.lang.reflect.Type',
         [java$lang$reflect$Type,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$function$Supplier extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$function$Supplier,
        'java.util.function.Supplier',
         [java$util$function$Supplier,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$get$$ = impl;
  }
}


class java$nio$BufferMismatch extends java$lang$Object {
  nativeObject = null;

  static SCOPED_MEMORY_ACCESS = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$BufferMismatch,
        'java.nio.BufferMismatch',
         [java$nio$BufferMismatch,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    jdk$internal$misc$ScopedMemoryAccess.$i;
    var0 = (jdk$internal$misc$ScopedMemoryAccess.Ljdk$internal$misc$ScopedMemoryAccess$$getScopedMemoryAccess$$());
    java$nio$BufferMismatch.$i;
    java$nio$BufferMismatch.SCOPED_MEMORY_ACCESS = var0;
    return;
  }

  static I$mismatch$Ljava$nio$ByteBuffer$$I$Ljava$nio$ByteBuffer$$I$I(arg0,arg1,arg2,arg3,arg4) {
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var phi10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    If_8_0: {
     if (arg4 <= 7) {
      phi10 = (0) | 0;
      break If_8_0;
     } else {
      var0 = (arg0.B$get$I(arg1));
      if (var0 == (arg2.B$get$I(arg3))) {
       java$nio$BufferMismatch.$i;
       var1 = (java$nio$BufferMismatch.SCOPED_MEMORY_ACCESS);
       var2 = (arg0.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
       var3 = (arg2.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
       var4 = (java$nio$ByteBuffer.prototype.Ljava$lang$Object$$base$$.call(arg0));
       var5 = ((arg0.address) + (arg1 | 0));
       var6 = (java$nio$ByteBuffer.prototype.Ljava$lang$Object$$base$$.call(arg2));
       var7 = ((arg2.address) + (arg3 | 0));
       jdk$internal$util$ArraysSupport.$i;
       var8 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_BYTE_INDEX_SCALE)) | 0;
       var9 = ((jdk$internal$misc$ScopedMemoryAccess.prototype.I$vectorizedMismatch$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I.call(var1,var2,var3,var4,var5,var6,var7,arg4,var8))) | 0;
       if (var9 < 0) {
        phi10 = ((arg4 - (var9 ^ -1))) | 0;
        break If_8_0;
       } else {
        return var9;
       }
      } else {
       return 0;
      }
     }
    }
    L1220299696: while(true) {
     if (phi10 >= arg4) {
      return -1;
     } else {
      var11 = ((arg1 + phi10)) | 0;
      var12 = (arg0.B$get$I(var11));
      var13 = ((arg3 + phi10)) | 0;
      if (var12 == (arg2.B$get$I(var13))) {
       phi10 = ((phi10 + 1)) | 0;
       // Here was a goto statement
       continue L1220299696;
      } else {
       return phi10;
      }
     }
    }
  }

  static I$mismatch$Ljava$nio$CharBuffer$$I$Ljava$nio$CharBuffer$$I$I(arg0,arg1,arg2,arg3,arg4) {
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var phi12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    If_8_0: {
     if (arg4 <= 3) {
      phi12 = (0) | 0;
      break If_8_0;
     } else {
      var0 = (arg0.Ljava$nio$ByteOrder$$charRegionOrder$$());
      if (var0 != (arg2.Ljava$nio$ByteOrder$$charRegionOrder$$())) {
       phi12 = (0) | 0;
       break If_8_0;
      } else {
       if ((arg0.Ljava$nio$ByteOrder$$charRegionOrder$$()) == null) {
        phi12 = (0) | 0;
        break If_8_0;
       } else {
        if ((arg2.Ljava$nio$ByteOrder$$charRegionOrder$$()) == null) {
         phi12 = (0) | 0;
         break If_8_0;
        } else {
         var1 = (arg0.C$get$I(arg1));
         if (var1 == (arg2.C$get$I(arg3))) {
          java$nio$BufferMismatch.$i;
          var2 = (java$nio$BufferMismatch.SCOPED_MEMORY_ACCESS);
          var3 = (arg0.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
          var4 = (arg2.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
          var5 = (java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(arg0));
          var6 = (arg0.address);
          jdk$internal$util$ArraysSupport.$i;
          var7 = (var6 + ((arg1 << (jdk$internal$util$ArraysSupport.LOG2_ARRAY_CHAR_INDEX_SCALE)) | 0));
          var8 = (java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(arg2));
          var9 = ((arg2.address) + ((arg3 << (jdk$internal$util$ArraysSupport.LOG2_ARRAY_CHAR_INDEX_SCALE)) | 0));
          var10 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_CHAR_INDEX_SCALE)) | 0;
          var11 = ((jdk$internal$misc$ScopedMemoryAccess.prototype.I$vectorizedMismatch$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I.call(var2,var3,var4,var5,var7,var8,var9,arg4,var10))) | 0;
          if (var11 < 0) {
           phi12 = ((arg4 - (var11 ^ -1))) | 0;
           break If_8_0;
          } else {
           return var11;
          }
         } else {
          return 0;
         }
        }
       }
      }
     }
    }
    L22491864: while(true) {
     if (phi12 >= arg4) {
      return -1;
     } else {
      var13 = ((arg1 + phi12)) | 0;
      var14 = (arg0.C$get$I(var13));
      var15 = ((arg3 + phi12)) | 0;
      if (var14 == (arg2.C$get$I(var15))) {
       phi12 = ((phi12 + 1)) | 0;
       // Here was a goto statement
       continue L22491864;
      } else {
       return phi12;
      }
     }
    }
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class jdk$internal$util$Preconditions extends java$lang$Object {
  nativeObject = null;

  static SIOOBE_FORMATTER = null;
  static AIOOBE_FORMATTER = null;
  static IOOBE_FORMATTER = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$util$Preconditions,
        'jdk.internal.util.Preconditions',
         [jdk$internal$util$Preconditions,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = new jdk$internal$util$Preconditions$1();
    jdk$internal$util$Preconditions$1.prototype.V$$init$$$.call(var0);
    jdk$internal$util$Preconditions.$i;
    jdk$internal$util$Preconditions.SIOOBE_FORMATTER = (jdk$internal$util$Preconditions.Ljava$util$function$BiFunction$$outOfBoundsExceptionFormatter$Ljava$util$function$Function$(var0));
    var1 = new jdk$internal$util$Preconditions$2();
    jdk$internal$util$Preconditions$2.prototype.V$$init$$$.call(var1);
    jdk$internal$util$Preconditions.AIOOBE_FORMATTER = (jdk$internal$util$Preconditions.Ljava$util$function$BiFunction$$outOfBoundsExceptionFormatter$Ljava$util$function$Function$(var1));
    var2 = new jdk$internal$util$Preconditions$3();
    jdk$internal$util$Preconditions$3.prototype.V$$init$$$.call(var2);
    jdk$internal$util$Preconditions.IOOBE_FORMATTER = (jdk$internal$util$Preconditions.Ljava$util$function$BiFunction$$outOfBoundsExceptionFormatter$Ljava$util$function$Function$(var2));
    return;
  }

  static Ljava$util$function$BiFunction$$outOfBoundsExceptionFormatter$Ljava$util$function$Function$(arg0) {
    var var0 = null;
    var0 = new jdk$internal$util$Preconditions$4();
    jdk$internal$util$Preconditions$4.prototype.V$$init$$Ljava$util$function$Function$.call(var0,arg0);
    return var0;
  }

  static I$checkFromIndexSize$I$I$I$Ljava$util$function$BiFunction$(arg0,arg1,arg2,arg3) {
    If_7_0: {
     if (((arg2 | arg0) | arg1) < 0) {
      break If_7_0;
     } else {
      if (arg1 <= (arg2 - arg0)) {
       return arg0;
      } else {
       break If_7_0;
      }
     }
    }
    jdk$internal$util$Preconditions.$i;
    throw bytecoder.registerStack((jdk$internal$util$Preconditions.Ljava$lang$RuntimeException$$outOfBoundsCheckFromIndexSize$Ljava$util$function$BiFunction$$I$I$I(arg3,arg0,arg1,arg2)), new Error().stack);
  }

  static Ljava$lang$RuntimeException$$outOfBoundsCheckFromIndexSize$Ljava$util$function$BiFunction$$I$I$I(arg0,arg1,arg2,arg3) {
    var var0 = null;
    var0 = bytecoder.newarray((3),null);
    java$lang$Integer.$i;
    var0.data[0] = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg1));
    var0.data[1] = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg2));
    var0.data[2] = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg3));
    jdk$internal$util$Preconditions.$i;
    return (jdk$internal$util$Preconditions.Ljava$lang$RuntimeException$$outOfBounds$Ljava$util$function$BiFunction$$Ljava$lang$String$$$Ljava$lang$Number$(arg0,bytecoder.stringconstants[41],var0));
  }

  static Ljava$lang$RuntimeException$$outOfBounds$Ljava$util$function$BiFunction$$Ljava$lang$String$$$Ljava$lang$Number$(arg0,arg1,arg2) {
    var var0 = null;
    var phi1 = null;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var0 = (java$util$List.Ljava$util$List$$of$$Ljava$lang$Object$(arg2));
    If_8_0: {
     if (arg0 != null) {
      phi1 = (arg0.Ljava$lang$Object$$apply$Ljava$lang$Object$$Ljava$lang$Object$(arg1,var0));
      break If_8_0;
     } else {
      phi1 = null;
      break If_8_0;
     }
    }
    var2 = phi1;
    If_15_0: {
     if (var2 != null) {
      phi4 = var2;
      break If_15_0;
     } else {
      var3 = new java$lang$IndexOutOfBoundsException();
      jdk$internal$util$Preconditions.$i;
      java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var3,(jdk$internal$util$Preconditions.Ljava$lang$String$$outOfBoundsMessage$Ljava$lang$String$$Ljava$util$List$(arg1,var0)));
      phi4 = var3;
      break If_15_0;
     }
    }
    return phi4;
  }

  static Ljava$lang$String$$outOfBoundsMessage$Ljava$lang$String$$Ljava$util$List$(arg0,arg1) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var phi3 = 0;
    var phi4 = 0;
    var phi5 = null;
    var var6 = null;
    var phi7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    If_3_0: {
     if (arg0 != null) {
      break If_3_0;
     } else {
      if (arg1 != null) {
       break If_3_0;
      } else {
       var0 = bytecoder.newarray((0),null);
       return (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[73],var0));
      }
     }
    }
    if (arg0 != null) {
     if (arg1 != null) {
      LookupSwitch_41_0: {
       switch ((java$lang$String.prototype.I$hashCode$$.call(arg0))) {
        case 1848935233: {
         if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(arg0,bytecoder.stringconstants[41])) == 0) {
          phi3 = (-1) | 0;
          break LookupSwitch_41_0;
         } else {
          phi3 = (2) | 0;
          break LookupSwitch_41_0;
         }
        }
        case -538822486: {
         if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(arg0,bytecoder.stringconstants[80])) == 0) {
          phi3 = (-1) | 0;
          break LookupSwitch_41_0;
         } else {
          phi3 = (0) | 0;
          break LookupSwitch_41_0;
         }
        }
        case 1844394469: {
         if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(arg0,bytecoder.stringconstants[79])) == 0) {
          phi3 = (-1) | 0;
          break LookupSwitch_41_0;
         } else {
          phi3 = (1) | 0;
          break LookupSwitch_41_0;
         }
        }
        default: {
         phi3 = (-1) | 0;
         break LookupSwitch_41_0;
        }
       }
      }
      TableSwitch_44_0: {
       if ((phi3) >= 0 && (phi3) <= 2) switch ((phi3) - 0) {
        case 0: {
         phi4 = (2) | 0;
         break TableSwitch_44_0;
        }
        case 1: {
         phi4 = (3) | 0;
         break TableSwitch_44_0;
        }
        case 2: {
         phi4 = (3) | 0;
         break TableSwitch_44_0;
        }
       } else {
        phi4 = (0) | 0;
        break TableSwitch_44_0;
       }
      }
      If_49_0: {
       if ((arg1.I$size$$()) == phi4) {
        phi5 = arg0;
        break If_49_0;
       } else {
        phi5 = bytecoder.stringconstants[1];
        break If_49_0;
       }
      }
      var6 = phi5;
      LookupSwitch_58_0: {
       switch ((java$lang$String.prototype.I$hashCode$$.call(var6))) {
        case 1848935233: {
         if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var6,bytecoder.stringconstants[41])) == 0) {
          phi7 = (-1) | 0;
          break LookupSwitch_58_0;
         } else {
          phi7 = (2) | 0;
          break LookupSwitch_58_0;
         }
        }
        case 1844394469: {
         if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var6,bytecoder.stringconstants[79])) == 0) {
          phi7 = (-1) | 0;
          break LookupSwitch_58_0;
         } else {
          phi7 = (1) | 0;
          break LookupSwitch_58_0;
         }
        }
        case -538822486: {
         if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var6,bytecoder.stringconstants[80])) == 0) {
          phi7 = (-1) | 0;
          break LookupSwitch_58_0;
         } else {
          phi7 = (0) | 0;
          break LookupSwitch_58_0;
         }
        }
        default: {
         phi7 = (-1) | 0;
         break LookupSwitch_58_0;
        }
       }
      }
      if ((phi7) >= 0 && (phi7) <= 2) switch ((phi7) - 0) {
       case 0: {
        var10 = bytecoder.newarray((2),null);
        var10.data[0] = (arg1.Ljava$lang$Object$$get$I(0));
        var10.data[1] = (arg1.Ljava$lang$Object$$get$I(1));
        return (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[77],var10));
       }
       case 1: {
        var9 = bytecoder.newarray((3),null);
        var9.data[0] = (arg1.Ljava$lang$Object$$get$I(0));
        var9.data[1] = (arg1.Ljava$lang$Object$$get$I(1));
        var9.data[2] = (arg1.Ljava$lang$Object$$get$I(2));
        return (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[76],var9));
       }
       case 2: {
        var8 = bytecoder.newarray((3),null);
        var8.data[0] = (arg1.Ljava$lang$Object$$get$I(0));
        var8.data[1] = (arg1.Ljava$lang$Object$$get$I(1));
        var8.data[2] = (arg1.Ljava$lang$Object$$get$I(2));
        return (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[75],var8));
       }
      } else {
       var11 = bytecoder.newarray((2),null);
       var11.data[0] = arg0;
       var11.data[1] = arg1;
       return (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[78],var11));
      }
     } else {
      var2 = bytecoder.newarray((1),null);
      var2.data[0] = arg0;
      return (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[74],var2));
     }
    } else {
     var1 = bytecoder.newarray((1),null);
     var1.data[0] = arg1;
     return (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[74],var1));
    }
  }

  static I$checkIndex$I$I$Ljava$util$function$BiFunction$(arg0,arg1,arg2) {
    If_4_0: {
     if (arg0 < 0) {
      break If_4_0;
     } else {
      if (arg0 < arg1) {
       return arg0;
      } else {
       break If_4_0;
      }
     }
    }
    jdk$internal$util$Preconditions.$i;
    throw bytecoder.registerStack((jdk$internal$util$Preconditions.Ljava$lang$RuntimeException$$outOfBoundsCheckIndex$Ljava$util$function$BiFunction$$I$I(arg2,arg0,arg1)), new Error().stack);
  }

  static Ljava$lang$RuntimeException$$outOfBoundsCheckIndex$Ljava$util$function$BiFunction$$I$I(arg0,arg1,arg2) {
    var var0 = null;
    var0 = bytecoder.newarray((2),null);
    java$lang$Integer.$i;
    var0.data[0] = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg1));
    var0.data[1] = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg2));
    jdk$internal$util$Preconditions.$i;
    return (jdk$internal$util$Preconditions.Ljava$lang$RuntimeException$$outOfBounds$Ljava$util$function$BiFunction$$Ljava$lang$String$$$Ljava$lang$Number$(arg0,bytecoder.stringconstants[80],var0));
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$io$Serializable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$Serializable,
        'java.io.Serializable',
         [java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$nio$charset$CoderResult extends java$lang$Object {
  nativeObject = null;

  static names = null;
  type = 0;
  length = 0;
  static UNDERFLOW = null;
  static OVERFLOW = null;
  static malformed4 = null;
  static unmappable4 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$charset$CoderResult,
        'java.nio.charset.CoderResult',
         [java$nio$charset$CoderResult,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    java$nio$charset$CoderResult.$i;
    var0 = bytecoder.newarray((4),null);
    var0.data[0] = bytecoder.stringconstants[33];
    var0.data[1] = bytecoder.stringconstants[34];
    var0.data[2] = bytecoder.stringconstants[35];
    var0.data[3] = bytecoder.stringconstants[36];
    java$nio$charset$CoderResult.names = var0;
    var1 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var1,0,0);
    java$nio$charset$CoderResult.UNDERFLOW = var1;
    var2 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var2,1,0);
    java$nio$charset$CoderResult.OVERFLOW = var2;
    var3 = bytecoder.newarray((4),null);
    var4 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var4,2,1);
    var3.data[0] = var4;
    var5 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var5,2,2);
    var3.data[1] = var5;
    var6 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var6,2,3);
    var3.data[2] = var6;
    var7 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var7,2,4);
    var3.data[3] = var7;
    java$nio$charset$CoderResult.malformed4 = var3;
    var8 = bytecoder.newarray((4),null);
    var9 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var9,3,1);
    var8.data[0] = var9;
    var10 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var10,3,2);
    var8.data[1] = var10;
    var11 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var11,3,3);
    var8.data[2] = var11;
    var12 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var12,3,4);
    var8.data[3] = var12;
    java$nio$charset$CoderResult.unmappable4 = var8;
    return;
  }

  V$$init$$I$I(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.type = arg0;
    var1 = th;
    var1.length = arg1;
    return;
  }

  Z$isOverflow$$() {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((th.type) != 1) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }

  Z$isUnderflow$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.type) != 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  static Ljava$nio$charset$CoderResult$$malformedForLength$I(arg0) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    if (arg0 > 0) {
     if (arg0 > 4) {
      java$nio$charset$CoderResult$Cache.$i;
      var1 = ((java$nio$charset$CoderResult$Cache.INSTANCE).malformed);
      java$lang$Integer.$i;
      var2 = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg0));
      var3 = bytecoder.instanceWithLambdaImpl(java$util$function$Function, function(linkarg0) { return java$nio$charset$CoderResult.Ljava$nio$charset$CoderResult$$lambda$malformedForLength$0$Ljava$lang$Integer$.call(this, linkarg0);});
      return (var1.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(var2,var3));
     } else {
      java$nio$charset$CoderResult.$i;
      return ((java$nio$charset$CoderResult.malformed4).data[(arg0 - 1)]);
     }
    } else {
     var0 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[39]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  static Ljava$nio$charset$CoderResult$$lambda$malformedForLength$0$Ljava$lang$Integer$(arg0) {
    var var0 = null;
    java$nio$charset$CoderResult.$i;
    var0 = new java$nio$charset$CoderResult();
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var0,2,(java$lang$Integer.prototype.I$intValue$$.call(arg0)));
    return var0;
  }

  Z$isMalformed$$() {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((th.type) != 2) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }

  I$length$$() {
    var th = this;
    var var0 = null;
    if ((java$nio$charset$CoderResult.prototype.Z$isError$$.call(th)) != 0) {
     return (th.length);
    } else {
     var0 = new java$lang$UnsupportedOperationException();
     java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  Z$isError$$() {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((th.type) < 2) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }

  Z$isUnmappable$$() {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((th.type) != 3) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var phi7 = null;
    java$nio$charset$CoderResult.$i;
    var0 = ((java$nio$charset$CoderResult.names).data[(th.type)]);
    If_10_0: {
     if ((java$nio$charset$CoderResult.prototype.Z$isError$$.call(th)) == 0) {
      phi7 = var0;
      break If_10_0;
     } else {
      var1 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var1);
      var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var1,var0));
      var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[81]));
      var4 = ((th.length)) | 0;
      var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var3,var4));
      var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var5,bytecoder.stringconstants[82]));
      phi7 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var6));
      break If_10_0;
     }
    }
    return phi7;
  }
}


class java$util$RandomAccess extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$RandomAccess,
        'java.util.RandomAccess',
         [java$util$RandomAccess,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$io$FileDescriptor extends java$lang$Object {
  nativeObject = null;

  fd = 0;
  static in = null;
  static out = null;
  static err = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$FileDescriptor,
        'java.io.FileDescriptor',
         [java$io$FileDescriptor,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  I$getFileDescriptorHandle$$() {
    var th = this;
    return (th.fd);
  }

  V$setFileDescriptorHandle$I(arg0) {
    var th = this;
    var var0 = null;
    var0 = th;
    var0.fd = arg0;
    return;
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    java$io$FileDescriptor.$i;
    var0 = new java$io$FileDescriptor();
    java$io$FileDescriptor.prototype.V$$init$$I.call(var0,0);
    java$io$FileDescriptor.in = var0;
    var1 = new java$io$FileDescriptor();
    java$io$FileDescriptor.prototype.V$$init$$I.call(var1,1);
    java$io$FileDescriptor.out = var1;
    var2 = new java$io$FileDescriptor();
    java$io$FileDescriptor.prototype.V$$init$$I.call(var2,2);
    java$io$FileDescriptor.err = var2;
    return;
  }

  V$$init$$I(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.fd = arg0;
    return;
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.fd = -1;
    return;
  }
}


class java$lang$Appendable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Appendable,
        'java.lang.Appendable',
         [java$lang$Appendable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$invoke$MethodHandle extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$invoke$MethodHandle,
        'java.lang.invoke.MethodHandle',
         [java$lang$invoke$MethodHandle,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$invokeExact$$Ljava$lang$Object$ = impl;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$lang$ref$Reference extends java$lang$Object {
  nativeObject = null;

  referent = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$ref$Reference,
        'java.lang.ref.Reference',
         [java$lang$ref$Reference,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$Object$$get$$() {
    var th = this;
    return (th.referent);
  }

  static V$reachabilityFence$Ljava$lang$Object$(arg0) {
    return;
  }
}


class jdk$internal$misc$CDS extends java$lang$Object {
  nativeObject = null;

  static isDumpingClassList = 0;
  static isDumpingArchive = 0;
  static isSharingEnabled = 0;
  static excludeFlags = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$misc$CDS,
        'jdk.internal.misc.CDS',
         [jdk$internal$misc$CDS,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    jdk$internal$misc$CDS.$i;
    jdk$internal$misc$CDS.isDumpingClassList = (jdk$internal$misc$CDS.Z$isDumpingClassList0$$());
    jdk$internal$misc$CDS.isDumpingArchive = (jdk$internal$misc$CDS.Z$isDumpingArchive0$$());
    jdk$internal$misc$CDS.isSharingEnabled = (jdk$internal$misc$CDS.Z$isSharingEnabled0$$());
    var0 = bytecoder.newarray((6),null);
    var0.data[0] = bytecoder.stringconstants[42];
    var0.data[1] = bytecoder.stringconstants[43];
    var0.data[2] = bytecoder.stringconstants[44];
    var0.data[3] = bytecoder.stringconstants[45];
    var0.data[4] = bytecoder.stringconstants[46];
    var0.data[5] = bytecoder.stringconstants[47];
    jdk$internal$misc$CDS.excludeFlags = var0;
    return;
  }

  static Z$isDumpingClassList0$$() {
    return bytecoder.imports['jdk.internal.misc.CDS'].Z$isDumpingClassList0$$();
  }

  static Z$isDumpingArchive0$$() {
    return bytecoder.imports['jdk.internal.misc.CDS'].Z$isDumpingArchive0$$();
  }

  static Z$isSharingEnabled0$$() {
    return bytecoder.imports['jdk.internal.misc.CDS'].Z$isSharingEnabled0$$();
  }

  static J$getRandomSeedForDumping$$() {
    return bytecoder.imports['jdk.internal.misc.CDS'].J$getRandomSeedForDumping$$();
  }

  static V$initializeFromArchive$Ljava$lang$Class$(arg0) {
    bytecoder.imports['jdk.internal.misc.CDS'].V$initializeFromArchive$Ljava$lang$Class$(arg0);
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$Collections extends java$lang$Object {
  nativeObject = null;

  static EMPTY_SET = null;
  static EMPTY_LIST = null;
  static EMPTY_MAP = null;
  static r = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Collections,
        'java.util.Collections',
         [java$util$Collections,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = new java$util$Collections$EmptySet();
    java$util$Collections$EmptySet.prototype.V$$init$$$.call(var0);
    java$util$Collections.$i;
    java$util$Collections.EMPTY_SET = var0;
    var1 = new java$util$Collections$EmptyList();
    java$util$Collections$EmptyList.prototype.V$$init$$$.call(var1);
    java$util$Collections.EMPTY_LIST = var1;
    var2 = new java$util$Collections$EmptyMap();
    java$util$Collections$EmptyMap.prototype.V$$init$$$.call(var2);
    java$util$Collections.EMPTY_MAP = var2;
    return;
  }

  static V$shuffle$Ljava$util$List$(arg0) {
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    java$util$Collections.$i;
    var0 = (java$util$Collections.r);
    If_7_0: {
     if (var0 != null) {
      phi2 = var0;
      break If_7_0;
     } else {
      var1 = new java$util$Random();
      java$util$Random.prototype.V$$init$$$.call(var1);
      java$util$Collections.r = var1;
      phi2 = var1;
      break If_7_0;
     }
    }
    java$util$Collections.V$shuffle$Ljava$util$List$$Ljava$util$Random$(arg0,phi2);
    return;
  }

  static V$shuffle$Ljava$util$List$$Ljava$util$Random$(arg0,arg1) {
    var var0 = 0;
    var phi1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = null;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var phi12 = 0;
    var var13 = null;
    var var14 = null;
    var0 = ((arg0.I$size$$())) | 0;
    If_7_0: {
     If_7_1: {
      if (var0 < 5) {
       break If_7_1;
      } else {
       if (bytecoder.instanceOf(arg0,java$util$RandomAccess) == 0) {
        var5 = (arg0.$Ljava$lang$Object$$toArray$$());
        phi6 = (var0) | 0;
        L1761112767: while(true) {
         if (phi6 <= 1) {
          var10 = (arg0.Ljava$util$ListIterator$$listIterator$$());
          var11 = (var5.data.length) | 0;
          phi12 = (0) | 0;
          L274750135: while(true) {
           if (phi12 >= var11) {
            break If_7_0;
           } else {
            var13 = (var5.data[phi12]);
            var14 = (var10.Ljava$lang$Object$$next$$());
            var10.V$set$Ljava$lang$Object$(var13);
            phi12 = ((phi12 + 1)) | 0;
            // Here was a goto statement
            continue L274750135;
           }
          }
         } else {
          var7 = ((phi6 - 1)) | 0;
          var8 = (phi6) | 0;
          var9 = ((java$util$Random.prototype.I$nextInt$I.call(arg1,var8))) | 0;
          java$util$Collections.$i;
          java$util$Collections.V$swap$$Ljava$lang$Object$$I$I(var5,var7,var9);
          phi6 = ((phi6 + -1)) | 0;
          // Here was a goto statement
          continue L1761112767;
         }
        }
       } else {
        break If_7_1;
       }
      }
     }
     phi1 = (var0) | 0;
     L2055589579: while(true) {
      if (phi1 <= 1) {
       break If_7_0;
      } else {
       var2 = ((phi1 - 1)) | 0;
       var3 = (phi1) | 0;
       var4 = ((java$util$Random.prototype.I$nextInt$I.call(arg1,var3))) | 0;
       java$util$Collections.$i;
       java$util$Collections.V$swap$Ljava$util$List$$I$I(arg0,var2,var4);
       phi1 = ((phi1 + -1)) | 0;
       // Here was a goto statement
       continue L2055589579;
      }
     }
    }
    return;
  }

  static V$swap$Ljava$util$List$$I$I(arg0,arg1,arg2) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = (arg0.Ljava$lang$Object$$get$I(arg1));
    var1 = (arg0.Ljava$lang$Object$$set$I$Ljava$lang$Object$(arg2,var0));
    var2 = (arg0.Ljava$lang$Object$$set$I$Ljava$lang$Object$(arg1,var1));
    return;
  }

  static V$swap$$Ljava$lang$Object$$I$I(arg0,arg1,arg2) {
    var var0 = null;
    var0 = (arg0.data[arg1]);
    arg0.data[arg1] = (arg0.data[arg2]);
    arg0.data[arg2] = var0;
    return;
  }

  static Ljava$util$ListIterator$$emptyListIterator$$() {
    java$util$Collections$EmptyListIterator.$i;
    return (java$util$Collections$EmptyListIterator.EMPTY_ITERATOR);
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  static Ljava$util$Iterator$$emptyIterator$$() {
    java$util$Collections$EmptyIterator.$i;
    return (java$util$Collections$EmptyIterator.EMPTY_ITERATOR);
  }

  static Ljava$util$Set$$emptySet$$() {
    java$util$Collections.$i;
    return (java$util$Collections.EMPTY_SET);
  }

  static Ljava$util$Set$$synchronizedSet$Ljava$util$Set$$Ljava$lang$Object$(arg0,arg1) {
    var var0 = null;
    var0 = new java$util$Collections$SynchronizedSet();
    java$util$Collections$SynchronizedSet.prototype.V$$init$$Ljava$util$Set$$Ljava$lang$Object$.call(var0,arg0,arg1);
    return var0;
  }
}


class de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup extends java$lang$Object {
  nativeObject = null;

  name = null;
  parent = null;
  static SYSTEM = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup,
        'de.mirkosertic.bytecoder.classlib.java.lang.TThreadGroup',
         [de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.$i;
    var0 = new de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup();
    de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.prototype.V$$init$$$.call(var0);
    de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.SYSTEM = var0;
    return;
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.name = bytecoder.stringconstants[66];
    var1 = th;
    var1.parent = null;
    return;
  }
}


class java$util$HashMap$HashIterator extends java$lang$Object {
  nativeObject = null;

  this$0 = null;
  expectedModCount = 0;
  next = null;
  current = null;
  index = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$HashMap$HashIterator,
        'java.util.HashMap$HashIterator',
         [java$util$HashMap$HashIterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$HashMap$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = null;
    var0 = th;
    var0.this$0 = arg0;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var1 = th;
    var1.expectedModCount = (arg0.modCount);
    var2 = (arg0.table);
    var3 = th;
    var4 = th;
    var4.next = null;
    var3.current = null;
    var5 = th;
    var5.index = 0;
    If_25_0: {
     if (var2 == null) {
      break If_25_0;
     } else {
      If_28_0: {
       if ((arg0.size) <= 0) {
        break If_25_0;
       } else {
        break If_28_0;
       }
      }
      L428639918: while(true) {
       if ((th.index) >= var2.data.length) {
        break If_25_0;
       } else {
        var6 = th;
        var7 = th;
        var8 = ((var7.index)) | 0;
        var7.index = (var8 + 1);
        var9 = (var2.data[var8]);
        var6.next = var9;
        if (var9 == null) {
         continue L428639918;
        } else {
         break If_25_0;
        }
       }
      }
     }
    }
    return;
  }

  Z$hasNext$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.next) == null) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  Ljava$util$HashMap$Node$$nextNode$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var0 = (th.next);
    if (((th.this$0).modCount) == (th.expectedModCount)) {
     if (var0 != null) {
      var3 = th;
      var4 = th;
      var4.current = var0;
      var5 = (var0.next);
      var3.next = var5;
      If_33_0: {
       if (var5 != null) {
        break If_33_0;
       } else {
        var6 = ((th.this$0).table);
        If_39_0: {
         if (var6 == null) {
          break If_33_0;
         } else {
          break If_39_0;
         }
        }
        L761046963: while(true) {
         if ((th.index) >= var6.data.length) {
          break If_33_0;
         } else {
          var7 = th;
          var8 = th;
          var9 = ((var8.index)) | 0;
          var8.index = (var9 + 1);
          var10 = (var6.data[var9]);
          var7.next = var10;
          if (var10 == null) {
           continue L761046963;
          } else {
           break If_33_0;
          }
         }
        }
       }
      }
      return var0;
     } else {
      var2 = new java$util$NoSuchElementException();
      java$util$NoSuchElementException.prototype.V$$init$$$.call(var2);
      throw bytecoder.registerStack(var2, new Error().stack);
     }
    } else {
     var1 = new java$util$ConcurrentModificationException();
     java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }
}


class java$lang$ClassLoader extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$ClassLoader,
        'java.lang.ClassLoader',
         [java$lang$ClassLoader,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class jdk$internal$misc$VM extends java$lang$Object {
  nativeObject = null;

  static lock = null;
  static directMemory = 0;
  static initLevel = 0;
  static savedProps = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$misc$VM,
        'jdk.internal.misc.VM',
         [jdk$internal$misc$VM,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    var0 = new java$lang$Object();
    java$lang$Object.prototype.V$$init$$$.call(var0);
    jdk$internal$misc$VM.$i;
    jdk$internal$misc$VM.lock = var0;
    jdk$internal$misc$VM.directMemory = 67108864;
    var1 = new java$util$HashMap();
    java$util$HashMap.prototype.V$$init$$$.call(var1);
    jdk$internal$misc$VM.V$saveProperties$Ljava$util$Map$(var1);
    return;
  }

  static V$saveProperties$Ljava$util$Map$(arg0) {
    var var0 = null;
    jdk$internal$misc$VM.$i;
    if ((jdk$internal$misc$VM.I$initLevel$$()) == 0) {
     If_16_0: {
      if ((jdk$internal$misc$VM.savedProps) != null) {
       break If_16_0;
      } else {
       jdk$internal$misc$VM.savedProps = arg0;
       break If_16_0;
      }
     }
     return;
    } else {
     var0 = new java$lang$IllegalStateException();
     java$lang$IllegalStateException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[65]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  static I$initLevel$$() {
    jdk$internal$misc$VM.$i;
    return (jdk$internal$misc$VM.initLevel);
  }

  static Z$isBooted$$() {
    var phi0 = 0;
    jdk$internal$misc$VM.$i;
    If_5_0: {
     if ((jdk$internal$misc$VM.initLevel) < 4) {
      phi0 = (0) | 0;
      break If_5_0;
     } else {
      phi0 = (1) | 0;
      break If_5_0;
     }
    }
    return phi0;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$Array extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        de$mirkosertic$bytecoder$classlib$Array,
        'de.mirkosertic.bytecoder.classlib.Array',
         [de$mirkosertic$bytecoder$classlib$Array,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static $Ljava$lang$Object$$newObjectArray$I(arg0) {
    return bytecoder.newarray((arg0),null);
  }

  static $C$newCharArray$I(arg0) {
    return bytecoder.newarray((arg0),0);
  }

  static I$charArrayLength$$C(arg0) {
    return arg0.data.length;
  }

  static C$getCharArrayEntry$$C$I(arg0,arg1) {
    return (arg0.data[arg1]);
  }

  static V$setCharArrayEntry$$C$I$C(arg0,arg1,arg2) {
    arg0.data[arg1] = arg2;
    return;
  }

  static $B$newByteArray$I(arg0) {
    return bytecoder.newarray((arg0),0);
  }

  static I$byteArrayLength$$B(arg0) {
    return arg0.data.length;
  }

  static B$getByteArrayEntry$$B$I(arg0,arg1) {
    return (arg0.data[arg1]);
  }

  static V$setByteArrayEntry$$B$I$B(arg0,arg1,arg2) {
    arg0.data[arg1] = arg2;
    return;
  }

  static I$getIntArrayEntry$$I$I(arg0,arg1) {
    return (arg0.data[arg1]);
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$nio$charset$CoderResult$Cache extends java$lang$Object {
  nativeObject = null;

  unmappable = null;
  malformed = null;
  static INSTANCE = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$charset$CoderResult$Cache,
        'java.nio.charset.CoderResult$Cache',
         [java$nio$charset$CoderResult$Cache,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$nio$charset$CoderResult$Cache.$i;
    var0 = new java$nio$charset$CoderResult$Cache();
    java$nio$charset$CoderResult$Cache.prototype.V$$init$$$.call(var0);
    java$nio$charset$CoderResult$Cache.INSTANCE = var0;
    return;
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var1 = new java$util$concurrent$ConcurrentHashMap();
    java$util$concurrent$ConcurrentHashMap.prototype.V$$init$$$.call(var1);
    var0.unmappable = var1;
    var2 = th;
    var3 = new java$util$concurrent$ConcurrentHashMap();
    java$util$concurrent$ConcurrentHashMap.prototype.V$$init$$$.call(var3);
    var2.malformed = var3;
    return;
  }
}


class java$util$Iterator extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Iterator,
        'java.util.Iterator',
         [java$util$Iterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$function$Function extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$function$Function,
        'java.util.function.Function',
         [java$util$function$Function,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$ = impl;
  }
}


class jdk$internal$misc$ScopedMemoryAccess extends java$lang$Object {
  nativeObject = null;

  static UNSAFE = null;
  static theScopedMemoryAccess = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$misc$ScopedMemoryAccess,
        'jdk.internal.misc.ScopedMemoryAccess',
         [jdk$internal$misc$ScopedMemoryAccess,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    jdk$internal$misc$Unsafe.$i;
    var0 = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    jdk$internal$misc$ScopedMemoryAccess.$i;
    jdk$internal$misc$ScopedMemoryAccess.UNSAFE = var0;
    jdk$internal$misc$ScopedMemoryAccess.V$registerNatives$$();
    var1 = new jdk$internal$misc$ScopedMemoryAccess();
    jdk$internal$misc$ScopedMemoryAccess.prototype.V$$init$$$.call(var1);
    jdk$internal$misc$ScopedMemoryAccess.theScopedMemoryAccess = var1;
    return;
  }

  static V$registerNatives$$() {
    bytecoder.imports['jdk.internal.misc.ScopedMemoryAccess'].V$registerNatives$$();
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  static Ljdk$internal$misc$ScopedMemoryAccess$$getScopedMemoryAccess$$() {
    jdk$internal$misc$ScopedMemoryAccess.$i;
    return (jdk$internal$misc$ScopedMemoryAccess.theScopedMemoryAccess);
  }

  I$vectorizedMismatch$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    TryCatch_10_0: {
     try {
      var1 = ((jdk$internal$misc$ScopedMemoryAccess.prototype.I$vectorizedMismatchInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I.call(th,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7))) | 0;
      break TryCatch_10_0;
     } catch (__ex) {
      if (__ex instanceof jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError) {
       var0 = __ex;
       throw bytecoder.registerStack((jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError.prototype.Ljava$lang$RuntimeException$$newRuntimeException$$.call(var0)), new Error().stack);
      }
      throw __ex;
     }
    }
    return var1;
  }

  I$vectorizedMismatchInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) {
    var var0 = null;
    var var1 = 0;
    TryCatch_9_0: {
     try {
      If_19_0: {
       if (arg0 == null) {
        break If_19_0;
       } else {
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(arg0);
        break If_19_0;
       }
      }
      If_23_0: {
       if (arg1 == null) {
        break If_23_0;
       } else {
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(arg1);
        break If_23_0;
       }
      }
      jdk$internal$util$ArraysSupport.$i;
      var1 = ((jdk$internal$util$ArraysSupport.I$vectorizedMismatch$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I(arg2,arg3,arg4,arg5,arg6,arg7))) | 0;
      break TryCatch_9_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_10_0: {
        var0 = __ex;
        break TryCatch_10_0;
       }
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg0);
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg1);
       throw bytecoder.registerStack(var0, new Error().stack);
      }
      throw __ex;
     }
    }
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg0);
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg1);
    return var1;
  }

  V$copyMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J(arg0,arg1,arg2,arg3,arg4,arg5,arg6) {
    var th = this;
    var var0 = null;
    TryCatch_9_0: {
     try {
      jdk$internal$misc$ScopedMemoryAccess.prototype.V$copyMemoryInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call(th,arg0,arg1,arg2,arg3,arg4,arg5,arg6);
      break TryCatch_9_0;
     } catch (__ex) {
      if (__ex instanceof jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError) {
       var0 = __ex;
       throw bytecoder.registerStack((jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError.prototype.Ljava$lang$RuntimeException$$newRuntimeException$$.call(var0)), new Error().stack);
      }
      throw __ex;
     }
    }
    return;
  }

  V$copyMemoryInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J(arg0,arg1,arg2,arg3,arg4,arg5,arg6) {
    var var0 = null;
    TryCatch_8_0: {
     try {
      If_18_0: {
       if (arg0 == null) {
        break If_18_0;
       } else {
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(arg0);
        break If_18_0;
       }
      }
      If_22_0: {
       if (arg1 == null) {
        break If_22_0;
       } else {
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(arg1);
        break If_22_0;
       }
      }
      jdk$internal$misc$ScopedMemoryAccess.$i;
      jdk$internal$misc$Unsafe.prototype.V$copyMemory$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call((jdk$internal$misc$ScopedMemoryAccess.UNSAFE),arg2,arg3,arg4,arg5,arg6);
      break TryCatch_8_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_9_0: {
        var0 = __ex;
        break TryCatch_9_0;
       }
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg0);
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg1);
       throw bytecoder.registerStack(var0, new Error().stack);
      }
      throw __ex;
     }
    }
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg0);
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg1);
    return;
  }

  V$copySwapMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) {
    var th = this;
    var var0 = null;
    TryCatch_10_0: {
     try {
      jdk$internal$misc$ScopedMemoryAccess.prototype.V$copySwapMemoryInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J.call(th,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7);
      break TryCatch_10_0;
     } catch (__ex) {
      if (__ex instanceof jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError) {
       var0 = __ex;
       throw bytecoder.registerStack((jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError.prototype.Ljava$lang$RuntimeException$$newRuntimeException$$.call(var0)), new Error().stack);
      }
      throw __ex;
     }
    }
    return;
  }

  V$copySwapMemoryInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) {
    var var0 = null;
    TryCatch_9_0: {
     try {
      If_19_0: {
       if (arg0 == null) {
        break If_19_0;
       } else {
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(arg0);
        break If_19_0;
       }
      }
      If_23_0: {
       if (arg1 == null) {
        break If_23_0;
       } else {
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(arg1);
        break If_23_0;
       }
      }
      jdk$internal$misc$ScopedMemoryAccess.$i;
      jdk$internal$misc$Unsafe.prototype.V$copySwapMemory$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J.call((jdk$internal$misc$ScopedMemoryAccess.UNSAFE),arg2,arg3,arg4,arg5,arg6,arg7);
      break TryCatch_9_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_10_0: {
        var0 = __ex;
        break TryCatch_10_0;
       }
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg0);
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg1);
       throw bytecoder.registerStack(var0, new Error().stack);
      }
      throw __ex;
     }
    }
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg0);
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg1);
    return;
  }
}


class java$lang$invoke$CallSite extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$invoke$CallSite,
        'java.lang.invoke.CallSite',
         [java$lang$invoke$CallSite,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$invoke$MethodHandle$$getTarget$$ = impl;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$lang$Cloneable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Cloneable,
        'java.lang.Cloneable',
         [java$lang$Cloneable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class jdk$internal$access$JavaNioAccess extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$access$JavaNioAccess,
        'jdk.internal.access.JavaNioAccess',
         [jdk$internal$access$JavaNioAccess,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$Random extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Random,
        'java.util.Random',
         [java$util$Random,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  I$nextInt$I(arg0) {
    java$lang$Math.$i;
    return ((java$lang$Math.D$random$$()) | 0);
  }
}


class java$nio$Buffer extends java$lang$Object {
  nativeObject = null;

  static UNSAFE = null;
  static SCOPED_MEMORY_ACCESS = null;
  mark = 0;
  position = 0;
  capacity = 0;
  segment = null;
  limit = 0;
  address = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$Buffer,
        'java.nio.Buffer',
         [java$nio$Buffer,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.Z$isReadOnly$$ = impl;
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$nio$Buffer.$i;
    jdk$internal$misc$Unsafe.$i;
    java$nio$Buffer.UNSAFE = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    jdk$internal$misc$ScopedMemoryAccess.$i;
    java$nio$Buffer.SCOPED_MEMORY_ACCESS = (jdk$internal$misc$ScopedMemoryAccess.Ljdk$internal$misc$ScopedMemoryAccess$$getScopedMemoryAccess$$());
    var0 = new java$nio$Buffer$1();
    java$nio$Buffer$1.prototype.V$$init$$$.call(var0);
    jdk$internal$access$SharedSecrets.V$setJavaNioAccess$Ljdk$internal$access$JavaNioAccess$(var0);
    return;
  }

  V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.mark = -1;
    var1 = th;
    var1.position = 0;
    if (arg3 >= 0) {
     var2 = th;
     var2.capacity = arg3;
     var3 = th;
     var3.segment = arg4;
     var4 = (th.Ljava$nio$Buffer$$limit$I(arg2));
     var5 = (th.Ljava$nio$Buffer$$position$I(arg1));
     If_35_0: {
      if (arg0 < 0) {
       break If_35_0;
      } else {
       if (arg0 <= arg1) {
        var13 = th;
        var13.mark = arg0;
        break If_35_0;
       } else {
        var6 = new java$lang$IllegalArgumentException();
        var7 = new java$lang$StringBuilder();
        java$lang$StringBuilder.prototype.V$$init$$$.call(var7);
        var8 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var7,bytecoder.stringconstants[30]));
        var9 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var8,arg0));
        var10 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var9,bytecoder.stringconstants[23]));
        var11 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var10,arg1));
        var12 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var11,bytecoder.stringconstants[24]));
        java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var6,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var12)));
        throw bytecoder.registerStack(var6, new Error().stack);
       }
      }
     }
     return;
    } else {
     java$nio$Buffer.$i;
     throw bytecoder.registerStack((java$nio$Buffer.Ljava$lang$IllegalArgumentException$$createCapacityException$I(arg3)), new Error().stack);
    }
  }

  static Ljava$lang$IllegalArgumentException$$createCapacityException$I(arg0) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    java$nio$Buffer.$i;
    var0 = new java$lang$IllegalArgumentException();
    var1 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var1);
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var1,bytecoder.stringconstants[20]));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var2,arg0));
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var3,bytecoder.stringconstants[21]));
    java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var4)));
    return var0;
  }

  Ljava$nio$Buffer$$limit$I(arg0) {
    var th = this;
    var phi0 = 0;
    var phi1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    If_4_0: {
     if (arg0 <= (th.capacity)) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    If_9_0: {
     if (arg0 >= 0) {
      phi1 = (0) | 0;
      break If_9_0;
     } else {
      phi1 = (1) | 0;
      break If_9_0;
     }
    }
    if ((phi0 | phi1) == 0) {
     var2 = th;
     var2.limit = arg0;
     If_25_0: {
      if ((th.position) <= arg0) {
       break If_25_0;
      } else {
       var3 = th;
       var3.position = arg0;
       break If_25_0;
      }
     }
     If_32_0: {
      if ((th.mark) <= arg0) {
       break If_32_0;
      } else {
       var4 = th;
       var4.mark = -1;
       break If_32_0;
      }
     }
     return th;
    } else {
     throw bytecoder.registerStack((java$nio$Buffer.prototype.Ljava$lang$IllegalArgumentException$$createLimitException$I.call(th,arg0)), new Error().stack);
    }
  }

  Ljava$lang$IllegalArgumentException$$createLimitException$I(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var phi7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    If_4_0: {
     if (arg0 <= (th.capacity)) {
      java$nio$Buffer.$i;
      var9 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var9);
      var10 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var9,bytecoder.stringconstants[26]));
      var11 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var10,arg0));
      var12 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var11,bytecoder.stringconstants[21]));
      phi7 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var12));
      break If_4_0;
     } else {
      var0 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
      var1 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var0,bytecoder.stringconstants[22]));
      var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var1,arg0));
      var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[23]));
      var4 = ((th.capacity)) | 0;
      var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var3,var4));
      var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var5,bytecoder.stringconstants[24]));
      phi7 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var6));
      break If_4_0;
     }
    }
    var8 = new java$lang$IllegalArgumentException();
    java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var8,phi7);
    return var8;
  }

  Ljava$nio$Buffer$$position$I(arg0) {
    var th = this;
    var phi0 = 0;
    var phi1 = 0;
    var var2 = null;
    var var3 = null;
    If_4_0: {
     if (arg0 <= (th.limit)) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    If_9_0: {
     if (arg0 >= 0) {
      phi1 = (0) | 0;
      break If_9_0;
     } else {
      phi1 = (1) | 0;
      break If_9_0;
     }
    }
    if ((phi0 | phi1) == 0) {
     If_22_0: {
      if ((th.mark) <= arg0) {
       break If_22_0;
      } else {
       var2 = th;
       var2.mark = -1;
       break If_22_0;
      }
     }
     var3 = th;
     var3.position = arg0;
     return th;
    } else {
     throw bytecoder.registerStack((java$nio$Buffer.prototype.Ljava$lang$IllegalArgumentException$$createPositionException$I.call(th,arg0)), new Error().stack);
    }
  }

  Ljava$lang$IllegalArgumentException$$createPositionException$I(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var phi7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    If_4_0: {
     if (arg0 <= (th.limit)) {
      java$nio$Buffer.$i;
      var9 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var9);
      var10 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var9,bytecoder.stringconstants[29]));
      var11 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var10,arg0));
      var12 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var11,bytecoder.stringconstants[21]));
      phi7 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var12));
      break If_4_0;
     } else {
      var0 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
      var1 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var0,bytecoder.stringconstants[27]));
      var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var1,arg0));
      var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[23]));
      var4 = ((th.limit)) | 0;
      var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var3,var4));
      var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var5,bytecoder.stringconstants[24]));
      phi7 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var6));
      break If_4_0;
     }
    }
    var8 = new java$lang$IllegalArgumentException();
    java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var8,phi7);
    return var8;
  }

  I$remaining$$() {
    var th = this;
    var var0 = 0;
    var phi1 = 0;
    var0 = (((th.limit) - (th.position))) | 0;
    If_7_0: {
     if (var0 <= 0) {
      phi1 = (0) | 0;
      break If_7_0;
     } else {
      phi1 = (var0) | 0;
      break If_7_0;
     }
    }
    return phi1;
  }

  Z$hasRemaining$$() {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((th.position) >= (th.limit)) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }

  I$position$$() {
    var th = this;
    return (th.position);
  }

  V$checkSession$$() {
    return;
  }

  I$limit$$() {
    var th = this;
    return (th.limit);
  }

  I$nextPutIndex$$() {
    var th = this;
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var0 = ((th.position)) | 0;
    if (var0 < (th.limit)) {
     var2 = th;
     var2.position = (var0 + 1);
     return var0;
    } else {
     var1 = new java$nio$BufferOverflowException();
     java$nio$BufferOverflowException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  Ljdk$internal$foreign$MemorySessionImpl$$session$$() {
    return null;
  }

  I$capacity$$() {
    var th = this;
    return (th.capacity);
  }

  I$checkIndex$I(arg0) {
    var th = this;
    var var0 = 0;
    var0 = ((th.limit)) | 0;
    return (java$util$Objects.I$checkIndex$I$I(arg0,var0));
  }
}


class java$lang$Void extends java$lang$Object {
  nativeObject = null;

  static TYPE = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Void,
        'java.lang.Void',
         [java$lang$Void,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var0 = (java$lang$Class.Ljava$lang$Class$$getPrimitiveClass$Ljava$lang$String$(bytecoder.stringconstants[48]));
    java$lang$Void.$i;
    java$lang$Void.TYPE = var0;
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$java$lang$ref$TReference extends java$lang$Object {
  nativeObject = null;

  referent = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        de$mirkosertic$bytecoder$classlib$java$lang$ref$TReference,
        'de.mirkosertic.bytecoder.classlib.java.lang.ref.TReference',
         [de$mirkosertic$bytecoder$classlib$java$lang$ref$TReference,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.referent = arg0;
    return;
  }
}


class java$util$Map$Entry extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Map$Entry,
        'java.util.Map$Entry',
         [java$util$Map$Entry,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class com$example$wasm$WasmBridge extends java$lang$Object {
  nativeObject = null;

  static engine = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        com$example$wasm$WasmBridge,
        'com.example.wasm.WasmBridge',
         [com$example$wasm$WasmBridge,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    com$example$wasm$WasmBridge.$i;
    com$example$wasm$WasmBridge.engine = null;
    return;
  }

  static V$main$$Ljava$lang$String$(arg0) {
    com$example$wasm$WasmBridge.$i;
    com$example$wasm$WasmBridge.V$init$$();
    return;
  }

  static V$init$$() {
    var var0 = null;
    var0 = new com$example$wasm$GameEngine();
    com$example$wasm$GameEngine.prototype.V$$init$$$.call(var0);
    com$example$wasm$WasmBridge.$i;
    com$example$wasm$WasmBridge.engine = var0;
    com$example$wasm$GameEngine.prototype.V$shuffle$$.call((com$example$wasm$WasmBridge.engine));
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$Objects extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Objects,
        'java.util.Objects',
         [java$util$Objects,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0) {
    var var0 = null;
    if (arg0 != null) {
     return arg0;
    } else {
     var0 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  static I$checkFromIndexSize$I$I$I(arg0,arg1,arg2) {
    jdk$internal$util$Preconditions.$i;
    return (jdk$internal$util$Preconditions.I$checkFromIndexSize$I$I$I$Ljava$util$function$BiFunction$(arg0,arg1,arg2,null));
  }

  static I$checkIndex$I$I(arg0,arg1) {
    jdk$internal$util$Preconditions.$i;
    return (jdk$internal$util$Preconditions.I$checkIndex$I$I$Ljava$util$function$BiFunction$(arg0,arg1,null));
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = new java$lang$AssertionError();
    java$lang$AssertionError.prototype.V$$init$$Ljava$lang$Object$.call(var0,bytecoder.stringconstants[100]);
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  static Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    var phi0 = 0;
    If_3_0: {
     If_3_1: {
      if (arg0 == arg1) {
       break If_3_1;
      } else {
       If_5_0: {
        if (arg0 == null) {
         break If_5_0;
        } else {
         if ((arg0.Z$equals$Ljava$lang$Object$(arg1)) == 0) {
          break If_5_0;
         } else {
          break If_3_1;
         }
        }
       }
       phi0 = (0) | 0;
       break If_3_0;
      }
     }
     phi0 = (1) | 0;
     break If_3_0;
    }
    return phi0;
  }

  static I$hashCode$Ljava$lang$Object$(arg0) {
    var phi0 = 0;
    If_2_0: {
     if (arg0 == null) {
      phi0 = (0) | 0;
      break If_2_0;
     } else {
      phi0 = ((arg0.I$hashCode$$())) | 0;
      break If_2_0;
     }
    }
    return phi0;
  }
}


class java$util$Map extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Map,
        'java.util.Map',
         [java$util$Map,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg1));
    var1 = (th.Ljava$lang$Object$$get$Ljava$lang$Object$(arg0));
    If_11_0: {
     if (var1 != null) {
      break If_11_0;
     } else {
      var2 = (arg1.Ljava$lang$Object$$apply$Ljava$lang$Object$(arg0));
      if (var2 == null) {
       break If_11_0;
      } else {
       var3 = (th.Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,var2));
       return var2;
      }
     }
    }
    return var1;
  }
}


class java$lang$System extends java$lang$Object {
  nativeObject = null;

  static PROPERTIES = null;
  static in = null;
  static out = null;
  static err = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$System,
        'java.lang.System',
         [java$lang$System,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    java$util$Properties.$i;
    var0 = new java$util$Properties();
    java$util$Properties.prototype.V$$init$$$.call(var0);
    java$lang$System.$i;
    java$lang$System.PROPERTIES = var0;
    var1 = (java$lang$System.PROPERTIES);
    var2 = (java$util$Properties.prototype.Ljava$lang$Object$$setProperty$Ljava$lang$String$$Ljava$lang$String$.call(var1,bytecoder.stringconstants[59],bytecoder.stringconstants[60]));
    var3 = new java$io$FileInputStream();
    java$io$FileDescriptor.$i;
    java$io$FileInputStream.prototype.V$$init$$Ljava$io$FileDescriptor$.call(var3,(java$io$FileDescriptor.in));
    java$lang$System.in = var3;
    java$io$PrintStream.$i;
    var4 = new java$io$PrintStream();
    var5 = new java$io$FileOutputStream();
    java$io$FileOutputStream.prototype.V$$init$$Ljava$io$FileDescriptor$.call(var5,(java$io$FileDescriptor.out));
    java$io$PrintStream.prototype.V$$init$$Ljava$io$OutputStream$.call(var4,var5);
    java$lang$System.out = var4;
    var6 = new java$io$PrintStream();
    var7 = new java$io$FileOutputStream();
    java$io$FileOutputStream.prototype.V$$init$$Ljava$io$FileDescriptor$.call(var7,(java$io$FileDescriptor.err));
    java$io$PrintStream.prototype.V$$init$$Ljava$io$OutputStream$.call(var6,var7);
    java$lang$System.err = var6;
    return;
  }

  static Ljava$lang$String$$getProperty$Ljava$lang$String$(arg0) {
    var var0 = null;
    java$lang$System.$i;
    var0 = (java$lang$System.PROPERTIES);
    return (java$util$Properties.prototype.Ljava$lang$String$$getProperty$Ljava$lang$String$.call(var0,arg0));
  }

  static J$nanoTime$$() {
    java$lang$System.$i;
    return ((java$lang$System.J$currentTimeMillis$$()) * 1000000);
  }

  static J$currentTimeMillis$$() {
    return bytecoder.imports['java.lang.System'].J$currentTimeMillis$$();
  }

  static I$identityHashCode$Ljava$lang$Object$(arg0) {
    return (arg0.I$hashCode$$());
  }

  static V$arraycopy$Ljava$lang$Object$$I$Ljava$lang$Object$$I$I(arg0,arg1,arg2,arg3,arg4) {
    var var0 = null;
    var var1 = null;
    var phi2 = 0;
    var0 = arg0;
    var1 = arg2;
    phi2 = (0) | 0;
    L1658945422: while(true) {
     if (phi2 >= arg4) {
      return;
     } else {
      var1.data[(arg3 + phi2)] = (var0.data[(arg1 + phi2)]);
      phi2 = ((phi2 + 1)) | 0;
      // Here was a goto statement
      continue L1658945422;
     }
    }
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  static V$arraycopy$$B$I$$B$I$I(arg0,arg1,arg2,arg3,arg4) {
    var phi0 = 0;
    phi0 = (0) | 0;
    L1678795189: while(true) {
     if (phi0 >= arg4) {
      return;
     } else {
      arg2.data[(arg3 + phi0)] = (arg0.data[(arg1 + phi0)]);
      phi0 = ((phi0 + 1)) | 0;
      // Here was a goto statement
      continue L1678795189;
     }
    }
  }

  static V$arraycopy$$C$I$$C$I$I(arg0,arg1,arg2,arg3,arg4) {
    var phi0 = 0;
    phi0 = (0) | 0;
    L1283936949: while(true) {
     if (phi0 >= arg4) {
      return;
     } else {
      arg2.data[(arg3 + phi0)] = (arg0.data[(arg1 + phi0)]);
      phi0 = ((phi0 + 1)) | 0;
      // Here was a goto statement
      continue L1283936949;
     }
    }
  }
}


class java$lang$AutoCloseable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$AutoCloseable,
        'java.lang.AutoCloseable',
         [java$lang$AutoCloseable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class de$mirkosertic$bytecoder$classlib$VM extends java$lang$Object {
  nativeObject = null;

  static SYSTEM_LOADER = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        de$mirkosertic$bytecoder$classlib$VM,
        'de.mirkosertic.bytecoder.classlib.VM',
         [de$mirkosertic$bytecoder$classlib$VM,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$lang$String$$exceptionMessage$Ljava$lang$Exception$(arg0) {
    return (arg0.Ljava$lang$String$$getMessage$$());
  }

  static Ljava$lang$String$$objectToString$Ljava$lang$Object$(arg0) {
    if (arg0 != null) {
     return (arg0.Ljava$lang$String$$toString$$());
    } else {
     return bytecoder.stringconstants[0];
    }
  }

  static Z$nullsafeEquals$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    if (arg0 != arg1) {
     if (arg0 == null) {
      return 0;
     } else {
      return (arg0.Z$equals$Ljava$lang$Object$(arg1));
     }
    } else {
     return 1;
    }
  }

  static Ljava$lang$Byte$$toByte$B(arg0) {
    java$lang$Byte.$i;
    return (java$lang$Byte.Ljava$lang$Byte$$valueOf$B(arg0));
  }

  static Ljava$lang$Short$$toShort$S(arg0) {
    java$lang$Short.$i;
    return (java$lang$Short.Ljava$lang$Short$$valueOf$S(arg0));
  }

  static Ljava$lang$Integer$$toInteger$I(arg0) {
    java$lang$Integer.$i;
    return (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg0));
  }

  static Ljava$lang$Long$$toLong$J(arg0) {
    java$lang$Long.$i;
    return (java$lang$Long.Ljava$lang$Long$$valueOf$J(arg0));
  }

  static Ljava$lang$Float$$toFloat$F(arg0) {
    java$lang$Float.$i;
    return (java$lang$Float.Ljava$lang$Float$$valueOf$F(arg0));
  }

  static Ljava$lang$Double$$toDouble$F(arg0) {
    var var0 = .0;
    var0 = arg0;
    java$lang$Double.$i;
    return (java$lang$Double.Ljava$lang$Double$$valueOf$D(var0));
  }

  static V$$clinit$$$() {
    var var0 = null;
    var0 = new de$mirkosertic$bytecoder$classlib$VM$1();
    de$mirkosertic$bytecoder$classlib$VM$1.prototype.V$$init$$$.call(var0);
    de$mirkosertic$bytecoder$classlib$VM.$i;
    de$mirkosertic$bytecoder$classlib$VM.SYSTEM_LOADER = var0;
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class com$example$wasm$GameEngine$ModelCard extends java$lang$Object {
  nativeObject = null;

  name = null;
  matched = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        com$example$wasm$GameEngine$ModelCard,
        'com.example.wasm.GameEngine$ModelCard',
         [com$example$wasm$GameEngine$ModelCard,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.name = arg0;
    var1 = th;
    var1.matched = 0;
    return;
  }
}


class jdk$internal$misc$InternalLock extends java$lang$Object {
  nativeObject = null;

  static CAN_USE_INTERNAL_LOCK = 0;
  lock = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$misc$InternalLock,
        'jdk.internal.misc.InternalLock',
         [jdk$internal$misc$InternalLock,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$lang$System.$i;
    var0 = (java$lang$System.Ljava$lang$String$$getProperty$Ljava$lang$String$(bytecoder.stringconstants[63]));
    If_7_0: {
     If_7_1: {
      if (var0 == null) {
       break If_7_1;
      } else {
       If_10_0: {
        if ((var0.Z$isEmpty$$()) != 0) {
         break If_10_0;
        } else {
         if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var0,bytecoder.stringconstants[64])) == 0) {
          break If_7_1;
         } else {
          break If_10_0;
         }
        }
       }
       jdk$internal$misc$InternalLock.$i;
       jdk$internal$misc$InternalLock.CAN_USE_INTERNAL_LOCK = 0;
       break If_7_0;
      }
     }
     jdk$internal$misc$InternalLock.$i;
     jdk$internal$misc$InternalLock.CAN_USE_INTERNAL_LOCK = 1;
     break If_7_0;
    }
    return;
  }

  static Ljava$lang$Object$$newLockOr$Ljava$lang$Object$(arg0) {
    var var0 = null;
    var phi1 = null;
    jdk$internal$misc$InternalLock.$i;
    If_5_0: {
     if ((jdk$internal$misc$InternalLock.CAN_USE_INTERNAL_LOCK) == 0) {
      phi1 = arg0;
      break If_5_0;
     } else {
      var0 = new jdk$internal$misc$InternalLock();
      jdk$internal$misc$InternalLock.prototype.V$$init$$$.call(var0);
      phi1 = var0;
      break If_5_0;
     }
    }
    return phi1;
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var1 = new java$util$concurrent$locks$ReentrantLock();
    java$util$concurrent$locks$ReentrantLock.prototype.V$$init$$$.call(var1);
    var0.lock = var1;
    return;
  }

  static Ljdk$internal$misc$InternalLock$$newLockOrNull$$() {
    var var0 = null;
    var phi1 = null;
    jdk$internal$misc$InternalLock.$i;
    If_4_0: {
     if ((jdk$internal$misc$InternalLock.CAN_USE_INTERNAL_LOCK) == 0) {
      phi1 = null;
      break If_4_0;
     } else {
      var0 = new jdk$internal$misc$InternalLock();
      jdk$internal$misc$InternalLock.prototype.V$$init$$$.call(var0);
      phi1 = var0;
      break If_4_0;
     }
    }
    return phi1;
  }
}


class java$nio$ByteOrder extends java$lang$Object {
  nativeObject = null;

  name = null;
  static BIG_ENDIAN = null;
  static LITTLE_ENDIAN = null;
  static NATIVE_ORDER = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$ByteOrder,
        'java.nio.ByteOrder',
         [java$nio$ByteOrder,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var phi3 = null;
    java$nio$ByteOrder.$i;
    var0 = new java$nio$ByteOrder();
    java$nio$ByteOrder.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[31]);
    java$nio$ByteOrder.BIG_ENDIAN = var0;
    var1 = new java$nio$ByteOrder();
    java$nio$ByteOrder.prototype.V$$init$$Ljava$lang$String$.call(var1,bytecoder.stringconstants[32]);
    java$nio$ByteOrder.LITTLE_ENDIAN = var1;
    jdk$internal$misc$Unsafe.$i;
    var2 = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    If_21_0: {
     if ((jdk$internal$misc$Unsafe.prototype.Z$isBigEndian$$.call(var2)) == 0) {
      phi3 = (java$nio$ByteOrder.LITTLE_ENDIAN);
      break If_21_0;
     } else {
      phi3 = (java$nio$ByteOrder.BIG_ENDIAN);
      break If_21_0;
     }
    }
    java$nio$ByteOrder.NATIVE_ORDER = phi3;
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.name = arg0;
    return;
  }

  static Ljava$nio$ByteOrder$$nativeOrder$$() {
    java$nio$ByteOrder.$i;
    return (java$nio$ByteOrder.NATIVE_ORDER);
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    return (th.name);
  }
}


class jdk$internal$util$ArraysSupport extends java$lang$Object {
  nativeObject = null;

  static U = null;
  static BIG_ENDIAN = 0;
  static LOG2_ARRAY_BOOLEAN_INDEX_SCALE = 0;
  static LOG2_ARRAY_BYTE_INDEX_SCALE = 0;
  static LOG2_ARRAY_CHAR_INDEX_SCALE = 0;
  static LOG2_ARRAY_SHORT_INDEX_SCALE = 0;
  static LOG2_ARRAY_INT_INDEX_SCALE = 0;
  static LOG2_ARRAY_LONG_INDEX_SCALE = 0;
  static LOG2_ARRAY_FLOAT_INDEX_SCALE = 0;
  static LOG2_ARRAY_DOUBLE_INDEX_SCALE = 0;
  static LOG2_BYTE_BIT_SIZE = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$util$ArraysSupport,
        'jdk.internal.util.ArraysSupport',
         [jdk$internal$util$ArraysSupport,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    jdk$internal$misc$Unsafe.$i;
    var0 = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    jdk$internal$util$ArraysSupport.$i;
    jdk$internal$util$ArraysSupport.U = var0;
    var1 = (jdk$internal$util$ArraysSupport.U);
    jdk$internal$util$ArraysSupport.BIG_ENDIAN = (jdk$internal$misc$Unsafe.prototype.Z$isBigEndian$$.call(var1));
    var2 = ((jdk$internal$misc$Unsafe.ARRAY_BOOLEAN_INDEX_SCALE)) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_BOOLEAN_INDEX_SCALE = (jdk$internal$util$ArraysSupport.I$exactLog2$I(var2));
    var3 = ((jdk$internal$misc$Unsafe.ARRAY_BYTE_INDEX_SCALE)) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_BYTE_INDEX_SCALE = (jdk$internal$util$ArraysSupport.I$exactLog2$I(var3));
    var4 = ((jdk$internal$misc$Unsafe.ARRAY_CHAR_INDEX_SCALE)) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_CHAR_INDEX_SCALE = (jdk$internal$util$ArraysSupport.I$exactLog2$I(var4));
    var5 = ((jdk$internal$misc$Unsafe.ARRAY_SHORT_INDEX_SCALE)) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_SHORT_INDEX_SCALE = (jdk$internal$util$ArraysSupport.I$exactLog2$I(var5));
    var6 = ((jdk$internal$misc$Unsafe.ARRAY_INT_INDEX_SCALE)) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_INT_INDEX_SCALE = (jdk$internal$util$ArraysSupport.I$exactLog2$I(var6));
    var7 = ((jdk$internal$misc$Unsafe.ARRAY_LONG_INDEX_SCALE)) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_LONG_INDEX_SCALE = (jdk$internal$util$ArraysSupport.I$exactLog2$I(var7));
    var8 = ((jdk$internal$misc$Unsafe.ARRAY_FLOAT_INDEX_SCALE)) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_FLOAT_INDEX_SCALE = (jdk$internal$util$ArraysSupport.I$exactLog2$I(var8));
    var9 = ((jdk$internal$misc$Unsafe.ARRAY_DOUBLE_INDEX_SCALE)) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_DOUBLE_INDEX_SCALE = (jdk$internal$util$ArraysSupport.I$exactLog2$I(var9));
    jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE = (jdk$internal$util$ArraysSupport.I$exactLog2$I(8));
    return;
  }

  static I$exactLog2$I(arg0) {
    var var0 = null;
    if ((arg0 & (arg0 - 1)) == 0) {
     java$lang$Integer.$i;
     return (java$lang$Integer.I$numberOfTrailingZeros$I(arg0));
    } else {
     var0 = new java$lang$Error();
     java$lang$Error.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[90]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  static I$newLength$I$I$I(arg0,arg1,arg2) {
    var var0 = 0;
    java$lang$Math.$i;
    var0 = ((arg0 + (java$lang$Math.I$max$I$I(arg1,arg2)))) | 0;
    If_11_0: {
     if (0 >= var0) {
      break If_11_0;
     } else {
      if (var0 > 2147483639) {
       break If_11_0;
      } else {
       return var0;
      }
     }
    }
    jdk$internal$util$ArraysSupport.$i;
    return (jdk$internal$util$ArraysSupport.I$hugeLength$I$I(arg0,arg1));
  }

  static I$hugeLength$I$I(arg0,arg1) {
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var0 = ((arg0 + arg1)) | 0;
    if (var0 >= 0) {
     if (var0 > 2147483639) {
      return var0;
     } else {
      return 2147483639;
     }
    } else {
     var1 = new java$lang$OutOfMemoryError();
     var2 = new java$lang$StringBuilder();
     java$lang$StringBuilder.prototype.V$$init$$$.call(var2);
     var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[91]));
     var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var3,arg0));
     var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var4,bytecoder.stringconstants[92]));
     var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var5,arg1));
     var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var6,bytecoder.stringconstants[93]));
     java$lang$OutOfMemoryError.prototype.V$$init$$Ljava$lang$String$.call(var1,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var7)));
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  static I$vectorizedMismatch$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I(arg0,arg1,arg2,arg3,arg4,arg5) {
    var var0 = 0;
    var phi1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var phi10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = null;
    var var17 = 0;
    var var18 = 0;
    var var19 = null;
    var var20 = 0;
    var var21 = 0;
    var var22 = 0;
    var phi23 = 0;
    var var24 = 0;
    var var25 = 0;
    var phi26 = 0;
    jdk$internal$util$ArraysSupport.$i;
    var0 = (((jdk$internal$util$ArraysSupport.LOG2_ARRAY_LONG_INDEX_SCALE) - arg5)) | 0;
    phi1 = (0) | 0;
    L467580168: while(true) {
     if (phi1 >= (arg4 >> var0)) {
      var13 = ((arg4 - (phi1 << var0))) | 0;
      if (arg5 >= (jdk$internal$util$ArraysSupport.LOG2_ARRAY_INT_INDEX_SCALE)) {
       return (var13 ^ -1);
      } else {
       var14 = ((1 << ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_INT_INDEX_SCALE) - arg5))) | 0;
       If_90_0: {
        if (var13 < var14) {
         phi26 = (var13) | 0;
         break If_90_0;
        } else {
         var15 = ((phi1 | 0) << (jdk$internal$util$ArraysSupport.LOG2_ARRAY_LONG_INDEX_SCALE));
         var16 = (jdk$internal$util$ArraysSupport.U);
         var17 = (arg1 + var15);
         var18 = ((jdk$internal$misc$Unsafe.prototype.I$getIntUnaligned$Ljava$lang$Object$$J.call(var16,arg0,var17))) | 0;
         var19 = (jdk$internal$util$ArraysSupport.U);
         var20 = (arg3 + var15);
         var21 = ((jdk$internal$misc$Unsafe.prototype.I$getIntUnaligned$Ljava$lang$Object$$J.call(var19,arg2,var20))) | 0;
         if (var18 == var21) {
          phi26 = ((var13 - var14)) | 0;
          break If_90_0;
         } else {
          var22 = ((var18 ^ var21)) | 0;
          If_121_0: {
           if ((jdk$internal$util$ArraysSupport.BIG_ENDIAN) == 0) {
            java$lang$Integer.$i;
            phi23 = (((java$lang$Integer.I$numberOfTrailingZeros$I(var22)) >> ((jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE) + arg5))) | 0;
            break If_121_0;
           } else {
            java$lang$Integer.$i;
            phi23 = (((java$lang$Integer.I$numberOfLeadingZeros$I(var22)) >> ((jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE) + arg5))) | 0;
            break If_121_0;
           }
          }
          var24 = (phi23) | 0;
          var25 = ((phi1 << var0)) | 0;
          return (var25 + var24);
         }
        }
       }
       return (phi26 ^ -1);
      }
     } else {
      var2 = ((phi1 | 0) << (jdk$internal$util$ArraysSupport.LOG2_ARRAY_LONG_INDEX_SCALE));
      var3 = (jdk$internal$util$ArraysSupport.U);
      var4 = (arg1 + var2);
      var5 = (jdk$internal$misc$Unsafe.prototype.J$getLongUnaligned$Ljava$lang$Object$$J.call(var3,arg0,var4));
      var6 = (jdk$internal$util$ArraysSupport.U);
      var7 = (arg3 + var2);
      var8 = (jdk$internal$misc$Unsafe.prototype.J$getLongUnaligned$Ljava$lang$Object$$J.call(var6,arg2,var7));
      if (bytecoder.cmp(var5,var8) == 0) {
       phi1 = ((phi1 + 1)) | 0;
       // Here was a goto statement
       continue L467580168;
      } else {
       var9 = (var5 ^ var8);
       If_50_0: {
        if ((jdk$internal$util$ArraysSupport.BIG_ENDIAN) == 0) {
         java$lang$Long.$i;
         phi10 = (((java$lang$Long.I$numberOfTrailingZeros$J(var9)) >> ((jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE) + arg5))) | 0;
         break If_50_0;
        } else {
         java$lang$Long.$i;
         phi10 = (((java$lang$Long.I$numberOfLeadingZeros$J(var9)) >> ((jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE) + arg5))) | 0;
         break If_50_0;
        }
       }
       var11 = (phi10) | 0;
       var12 = ((phi1 << var0)) | 0;
       return (var12 + var11);
      }
     }
    }
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$concurrent$locks$Lock extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$concurrent$locks$Lock,
        'java.util.concurrent.locks.Lock',
         [java$util$concurrent$locks$Lock,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$Class extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Class,
        'java.lang.Class',
         [java$lang$Class,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$lang$Class$$getPrimitiveClass$Ljava$lang$String$(arg0) {
    var var0 = null;
    if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[49],arg0)) == 0) {
     if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[50],arg0)) == 0) {
      if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[51],arg0)) == 0) {
       if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[52],arg0)) == 0) {
        if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[53],arg0)) == 0) {
         if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[54],arg0)) == 0) {
          if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[55],arg0)) == 0) {
           if ((java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[56],arg0)) == 0) {
            var0 = new java$lang$RuntimeException();
            java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(var0,arg0);
            throw bytecoder.registerStack(var0, new Error().stack);
           } else {
            return bytecoder.primitives.boolean;
           }
          } else {
           return bytecoder.primitives.long;
          }
         } else {
          return bytecoder.primitives.double;
         }
        } else {
         return bytecoder.primitives.float;
        }
       } else {
        return bytecoder.primitives.int;
       }
      } else {
       return bytecoder.primitives.short;
      }
     } else {
      return bytecoder.primitives.char;
     }
    } else {
     return bytecoder.primitives.byte;
    }
  }

  $Ljava$lang$reflect$Type$$getGenericInterfaces$$() {
    return bytecoder.newarray((0),null);
  }

  Ljava$lang$String$$getName$$() {
    return bytecoder.imports['java.lang.Class'].Ljava$lang$String$$getName$$(this);
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  I$hashCode$$() {
    return 42;
  }
}


class java$lang$Throwable extends java$lang$Object {
  nativeObject = null;

  message = null;
  cause = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Throwable,
        'java.lang.Throwable',
         [java$lang$Throwable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$String$$getMessage$$() {
    var th = this;
    return (th.message);
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.message = arg0;
    var1 = th;
    var1.cause = null;
    return;
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.message = null;
    var1 = th;
    var1.cause = null;
    return;
  }

  Ljava$lang$Throwable$$initCause$Ljava$lang$Throwable$(arg0) {
    var th = this;
    var var0 = null;
    var0 = th;
    var0.cause = arg0;
    return th;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.message = null;
    var1 = th;
    var1.cause = arg0;
    return;
  }
}


class java$lang$Character extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Character,
        'java.lang.Character',
         [java$lang$Character,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static I$compare$C$C(arg0,arg1) {
    return (arg0 - arg1);
  }

  static Ljava$lang$String$$toString$C(arg0) {
    return bytecoder.imports['java.lang.Character'].Ljava$lang$String$$toString$C(arg0);
  }
}


class java$util$ImmutableCollections extends java$lang$Object {
  nativeObject = null;

  static SALT32L = 0;
  static REVERSE = 0;
  static archivedObjects = null;
  static EMPTY = null;
  static EMPTY_LIST = null;
  static EMPTY_LIST_NULLS = null;
  static EMPTY_SET = null;
  static EMPTY_MAP = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections,
        'java.util.ImmutableCollections',
         [java$util$ImmutableCollections,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = 0;
    var phi1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    java$util$ImmutableCollections.$i;
    jdk$internal$misc$CDS.$i;
    var0 = (jdk$internal$misc$CDS.J$getRandomSeedForDumping$$());
    If_12_0: {
     if (bytecoder.cmp(var0,0) != 0) {
      phi1 = var0;
      break If_12_0;
     } else {
      java$lang$System.$i;
      phi1 = (java$lang$System.J$nanoTime$$());
      break If_12_0;
     }
    }
    java$util$ImmutableCollections.SALT32L = (((((2611923443488327891 * phi1) >> 16) | 0) | 0) & 4294967295);
    If_33_0: {
     if (bytecoder.cmp(((java$util$ImmutableCollections.SALT32L) & 1),0) != 0) {
      phi2 = (0) | 0;
      break If_33_0;
     } else {
      phi2 = (1) | 0;
      break If_33_0;
     }
    }
    java$util$ImmutableCollections.REVERSE = phi2;
    jdk$internal$misc$CDS.V$initializeFromArchive$Ljava$lang$Class$(java$util$ImmutableCollections.$rt);
    If_43_0: {
     if ((java$util$ImmutableCollections.archivedObjects) != null) {
      java$util$ImmutableCollections.EMPTY = ((java$util$ImmutableCollections.archivedObjects).data[0]);
      java$util$ImmutableCollections.EMPTY_LIST = ((java$util$ImmutableCollections.archivedObjects).data[1]);
      java$util$ImmutableCollections.EMPTY_LIST_NULLS = ((java$util$ImmutableCollections.archivedObjects).data[2]);
      java$util$ImmutableCollections.EMPTY_SET = ((java$util$ImmutableCollections.archivedObjects).data[3]);
      java$util$ImmutableCollections.EMPTY_MAP = ((java$util$ImmutableCollections.archivedObjects).data[4]);
      break If_43_0;
     } else {
      var3 = new java$lang$Object();
      java$lang$Object.prototype.V$$init$$$.call(var3);
      java$util$ImmutableCollections.EMPTY = var3;
      var4 = new java$util$ImmutableCollections$ListN();
      java$util$ImmutableCollections$ListN.prototype.V$$init$$$Ljava$lang$Object$$Z.call(var4,bytecoder.newarray((0),null),0);
      java$util$ImmutableCollections.EMPTY_LIST = var4;
      var5 = new java$util$ImmutableCollections$ListN();
      java$util$ImmutableCollections$ListN.prototype.V$$init$$$Ljava$lang$Object$$Z.call(var5,bytecoder.newarray((0),null),1);
      java$util$ImmutableCollections.EMPTY_LIST_NULLS = var5;
      var6 = new java$util$ImmutableCollections$SetN();
      java$util$ImmutableCollections$SetN.prototype.V$$init$$$Ljava$lang$Object$.call(var6,bytecoder.newarray((0),null));
      java$util$ImmutableCollections.EMPTY_SET = var6;
      var7 = new java$util$ImmutableCollections$MapN();
      java$util$ImmutableCollections$MapN.prototype.V$$init$$$Ljava$lang$Object$.call(var7,bytecoder.newarray((0),null));
      java$util$ImmutableCollections.EMPTY_MAP = var7;
      var8 = bytecoder.newarray((5),null);
      var8.data[0] = (java$util$ImmutableCollections.EMPTY);
      var8.data[1] = (java$util$ImmutableCollections.EMPTY_LIST);
      var8.data[2] = (java$util$ImmutableCollections.EMPTY_LIST_NULLS);
      var8.data[3] = (java$util$ImmutableCollections.EMPTY_SET);
      var8.data[4] = (java$util$ImmutableCollections.EMPTY_MAP);
      java$util$ImmutableCollections.archivedObjects = var8;
      break If_43_0;
     }
    }
    return;
  }

  static Ljava$util$List$$listFromArray$$Ljava$lang$Object$(arg0) {
    var var0 = null;
    var phi1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var0 = bytecoder.newarray((arg0.data.length),null);
    phi1 = (0) | 0;
    L996885059: while(true) {
     if (phi1 >= arg0.data.length) {
      var4 = new java$util$ImmutableCollections$ListN();
      java$util$ImmutableCollections$ListN.prototype.V$$init$$$Ljava$lang$Object$$Z.call(var4,var0,0);
      return var4;
     } else {
      var2 = (phi1) | 0;
      var3 = (arg0.data[phi1]);
      var0.data[var2] = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var3));
      phi1 = ((phi1 + 1)) | 0;
      // Here was a goto statement
      continue L996885059;
     }
    }
  }

  static Ljava$lang$UnsupportedOperationException$$uoe$$() {
    var var0 = null;
    var0 = new java$lang$UnsupportedOperationException();
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var0);
    return var0;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$lang$ThreadGroup extends java$lang$Object {
  nativeObject = null;

  name = null;
  parent = null;
  static SYSTEM = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$ThreadGroup,
        'java.lang.ThreadGroup',
         [java$lang$ThreadGroup,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$lang$ThreadGroup.$i;
    var0 = new java$lang$ThreadGroup();
    java$lang$ThreadGroup.prototype.V$$init$$$.call(var0);
    java$lang$ThreadGroup.SYSTEM = var0;
    return;
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.name = bytecoder.stringconstants[66];
    var1 = th;
    var1.parent = null;
    return;
  }

  V$$init$$Ljava$lang$ThreadGroup$$Ljava$lang$String$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.name = arg1;
    var1 = th;
    var1.parent = arg0;
    return;
  }
}


class java$lang$AbstractStringBuilder extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$AbstractStringBuilder,
        'java.lang.AbstractStringBuilder',
         [java$lang$AbstractStringBuilder,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$Iterable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Iterable,
        'java.lang.Iterable',
         [java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class jdk$internal$access$JavaIOPrintStreamAccess extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$access$JavaIOPrintStreamAccess,
        'jdk.internal.access.JavaIOPrintStreamAccess',
         [jdk$internal$access$JavaIOPrintStreamAccess,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$nio$charset$CharsetDecoder extends java$lang$Object {
  nativeObject = null;

  static stateNames = null;
  malformedInputAction = null;
  unmappableCharacterAction = null;
  maxCharsPerByte = 0.0;
  state = 0;
  replacement = null;
  charset = null;
  averageCharsPerByte = 0.0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$charset$CharsetDecoder,
        'java.nio.charset.CharsetDecoder',
         [java$nio$charset$CharsetDecoder,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.Ljava$nio$charset$CoderResult$$decodeLoop$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$ = impl;
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$nio$charset$CharsetDecoder.$i;
    var0 = bytecoder.newarray((4),null);
    var0.data[0] = bytecoder.stringconstants[5];
    var0.data[1] = bytecoder.stringconstants[6];
    var0.data[2] = bytecoder.stringconstants[7];
    var0.data[3] = bytecoder.stringconstants[8];
    java$nio$charset$CharsetDecoder.stateNames = var0;
    return;
  }

  Ljava$nio$charset$CharsetDecoder$$onMalformedInput$Ljava$nio$charset$CodingErrorAction$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    if (arg0 != null) {
     var1 = th;
     var1.malformedInputAction = arg0;
     java$nio$charset$CharsetDecoder.prototype.V$implOnMalformedInput$Ljava$nio$charset$CodingErrorAction$.call(th,arg0);
     return th;
    } else {
     var0 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[18]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$implOnMalformedInput$Ljava$nio$charset$CodingErrorAction$(arg0) {
    return;
  }

  Ljava$nio$charset$CharsetDecoder$$onUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    if (arg0 != null) {
     var1 = th;
     var1.unmappableCharacterAction = arg0;
     java$nio$charset$CharsetDecoder.prototype.V$implOnUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$.call(th,arg0);
     return th;
    } else {
     var0 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[18]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$implOnUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$(arg0) {
    return;
  }

  F$maxCharsPerByte$$() {
    var th = this;
    return (th.maxCharsPerByte);
  }

  Ljava$nio$charset$CoderResult$$decode$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$$Z(arg0,arg1,arg2) {
    var th = this;
    var phi0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var phi7 = null;
    var var8 = null;
    var phi9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = null;
    var var17 = 0;
    var var18 = null;
    var var19 = null;
    If_5_0: {
     if (arg2 == 0) {
      phi0 = (1) | 0;
      break If_5_0;
     } else {
      phi0 = (2) | 0;
      break If_5_0;
     }
    }
    var1 = (phi0) | 0;
    If_14_0: {
     if ((th.state) == 0) {
      break If_14_0;
     } else {
      if ((th.state) == 1) {
       break If_14_0;
      } else {
       If_21_0: {
        if (arg2 == 0) {
         break If_21_0;
        } else {
         if ((th.state) == 2) {
          break If_14_0;
         } else {
          break If_21_0;
         }
        }
       }
       java$nio$charset$CharsetDecoder.prototype.V$throwIllegalStateException$I$I.call(th,(th.state),var1);
       break If_14_0;
      }
     }
    }
    var2 = th;
    var2.state = var1;
    TryCatch_35: while(true) {
     TryCatch_35_0: {
      try {
       var5 = (th.Ljava$nio$charset$CoderResult$$decodeLoop$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$(arg0,arg1));
       break TryCatch_35_0;
      } catch (__ex) {
       if (__ex instanceof java$lang$RuntimeException) {
        var3 = __ex;
        var4 = new java$nio$charset$CoderMalfunctionError();
        java$nio$charset$CoderMalfunctionError.prototype.V$$init$$Ljava$lang$Exception$.call(var4,var3);
        throw bytecoder.registerStack(var4, new Error().stack);
       }
       throw __ex;
      }
     }
     if ((java$nio$charset$CoderResult.prototype.Z$isOverflow$$.call(var5)) == 0) {
      If_55_0: {
       if ((java$nio$charset$CoderResult.prototype.Z$isUnderflow$$.call(var5)) == 0) {
        phi7 = var5;
        break If_55_0;
       } else {
        If_58_0: {
         if (arg2 == 0) {
          break If_58_0;
         } else {
          if ((arg0.Z$hasRemaining$$()) == 0) {
           break If_58_0;
          } else {
           var6 = ((arg0.I$remaining$$())) | 0;
           java$nio$charset$CoderResult.$i;
           phi7 = (java$nio$charset$CoderResult.Ljava$nio$charset$CoderResult$$malformedForLength$I(var6));
           break If_55_0;
          }
         }
        }
        return var5;
       }
      }
      var8 = phi7;
      If_77_0: {
       if ((java$nio$charset$CoderResult.prototype.Z$isMalformed$$.call(var8)) == 0) {
        var19 = phi7;
        if ((java$nio$charset$CoderResult.prototype.Z$isUnmappable$$.call(var19)) == 0) {
         java$nio$charset$CharsetDecoder.$i;
         phi9 = null;
         break If_77_0;
        } else {
         phi9 = (th.unmappableCharacterAction);
         break If_77_0;
        }
       } else {
        phi9 = (th.malformedInputAction);
        break If_77_0;
       }
      }
      var10 = phi9;
      java$nio$charset$CodingErrorAction.$i;
      if (var10 != (java$nio$charset$CodingErrorAction.REPORT)) {
       If_92_0: {
        if (phi9 != (java$nio$charset$CodingErrorAction.REPLACE)) {
         break If_92_0;
        } else {
         var11 = ((arg1.I$remaining$$())) | 0;
         var12 = (th.replacement);
         if (var11 >= (java$lang$String.prototype.I$length$$.call(var12))) {
          var13 = (th.replacement);
          var14 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$put$Ljava$lang$String$.call(arg1,var13));
          break If_92_0;
         } else {
          java$nio$charset$CoderResult.$i;
          return (java$nio$charset$CoderResult.OVERFLOW);
         }
        }
       }
       If_114_0: {
        if (phi9 == (java$nio$charset$CodingErrorAction.IGNORE)) {
         break If_114_0;
        } else {
         if (phi9 != (java$nio$charset$CodingErrorAction.REPLACE)) {
          java$nio$charset$CharsetDecoder.$i;
          // Here was a goto statement
          continue TryCatch_35;
         } else {
          break If_114_0;
         }
        }
       }
       var15 = ((arg0.I$position$$())) | 0;
       var16 = phi7;
       var17 = ((var15 + (java$nio$charset$CoderResult.prototype.I$length$$.call(var16)))) | 0;
       var18 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$position$I.call(arg0,var17));
       // Here was a goto statement
       continue TryCatch_35;
      } else {
       return phi7;
      }
     } else {
      return var5;
     }
    }
  }

  V$throwIllegalStateException$I$I(arg0,arg1) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var0 = new java$lang$IllegalStateException();
    var1 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var1);
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var1,bytecoder.stringconstants[37]));
    java$nio$charset$CharsetDecoder.$i;
    var3 = ((java$nio$charset$CharsetDecoder.stateNames).data[arg0]);
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,var3));
    var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var4,bytecoder.stringconstants[38]));
    var6 = ((java$nio$charset$CharsetDecoder.stateNames).data[arg1]);
    var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var5,var6));
    java$lang$IllegalStateException.prototype.V$$init$$Ljava$lang$String$.call(var0,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var7)));
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  Ljava$nio$charset$CharsetDecoder$$reset$$() {
    var th = this;
    var var0 = null;
    java$nio$charset$CharsetDecoder.prototype.V$implReset$$.call(th);
    var0 = th;
    var0.state = 0;
    return th;
  }

  V$implReset$$() {
    return;
  }

  V$$init$$Ljava$nio$charset$Charset$$F$F(arg0,arg1,arg2) {
    var th = this;
    java$nio$charset$CharsetDecoder.prototype.V$$init$$Ljava$nio$charset$Charset$$F$F$Ljava$lang$String$.call(th,arg0,arg1,arg2,bytecoder.stringconstants[84]);
    return;
  }

  V$$init$$Ljava$nio$charset$Charset$$F$F$Ljava$lang$String$(arg0,arg1,arg2,arg3) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    java$nio$charset$CodingErrorAction.$i;
    var0.malformedInputAction = (java$nio$charset$CodingErrorAction.REPORT);
    var1 = th;
    var1.unmappableCharacterAction = (java$nio$charset$CodingErrorAction.REPORT);
    var2 = th;
    var2.state = 0;
    var3 = th;
    var3.charset = arg0;
    if (arg1 > 0.0) {
     if (arg2 > 0.0) {
      if (arg1 <= arg2) {
       var7 = th;
       var7.replacement = arg3;
       var8 = th;
       var8.averageCharsPerByte = arg1;
       var9 = th;
       var9.maxCharsPerByte = arg2;
       var10 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CharsetDecoder$$replaceWith$Ljava$lang$String$.call(th,arg3));
       return;
      } else {
       var6 = new java$lang$IllegalArgumentException();
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var6,bytecoder.stringconstants[87]);
       throw bytecoder.registerStack(var6, new Error().stack);
      }
     } else {
      var5 = new java$lang$IllegalArgumentException();
      java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var5,bytecoder.stringconstants[86]);
      throw bytecoder.registerStack(var5, new Error().stack);
     }
    } else {
     var4 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var4,bytecoder.stringconstants[85]);
     throw bytecoder.registerStack(var4, new Error().stack);
    }
  }

  Ljava$nio$charset$CharsetDecoder$$replaceWith$Ljava$lang$String$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    if (arg0 != null) {
     var1 = ((java$lang$String.prototype.I$length$$.call(arg0))) | 0;
     if (var1 != 0) {
      if (var1 <= (th.maxCharsPerByte)) {
       var4 = th;
       var4.replacement = arg0;
       java$nio$charset$CharsetDecoder.prototype.V$implReplaceWith$Ljava$lang$String$.call(th,(th.replacement));
       return th;
      } else {
       var3 = new java$lang$IllegalArgumentException();
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var3,bytecoder.stringconstants[17]);
       throw bytecoder.registerStack(var3, new Error().stack);
      }
     } else {
      var2 = new java$lang$IllegalArgumentException();
      java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var2,bytecoder.stringconstants[16]);
      throw bytecoder.registerStack(var2, new Error().stack);
     }
    } else {
     var0 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[15]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$implReplaceWith$Ljava$lang$String$(arg0) {
    return;
  }

  Ljava$nio$charset$Charset$$charset$$() {
    var th = this;
    return (th.charset);
  }
}


class java$util$Arrays extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Arrays,
        'java.util.Arrays',
         [java$util$Arrays,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    java$util$Arrays.$i;
    return;
  }

  static $B$copyOf$$B$I(arg0,arg1) {
    var var0 = null;
    var phi1 = 0;
    var var2 = 0;
    var var3 = 0;
    var0 = bytecoder.newarray((arg1),0);
    phi1 = (0) | 0;
    L720262900: while(true) {
     var2 = (phi1) | 0;
     var3 = (arg0.data.length) | 0;
     java$lang$Math.$i;
     if (var2 >= (java$lang$Math.I$min$I$I(arg1,var3))) {
      return var0;
     } else {
      var0.data[phi1] = (arg0.data[phi1]);
      phi1 = ((phi1 + 1)) | 0;
      // Here was a goto statement
      continue L720262900;
     }
    }
  }

  static $Ljava$lang$Object$$copyOf$$Ljava$lang$Object$$I(arg0,arg1) {
    java$util$Arrays.$i;
    return (java$util$Arrays.$Ljava$lang$Object$$copyOf$$Ljava$lang$Object$$I$Ljava$lang$Class$(arg0,arg1,null));
  }

  static $Ljava$lang$Object$$copyOf$$Ljava$lang$Object$$I$Ljava$lang$Class$(arg0,arg1,arg2) {
    var var0 = null;
    var phi1 = 0;
    var var2 = 0;
    var var3 = 0;
    var0 = bytecoder.newarray((arg1),null);
    phi1 = (0) | 0;
    L1754288803: while(true) {
     var2 = (phi1) | 0;
     var3 = (arg0.data.length) | 0;
     java$lang$Math.$i;
     if (var2 >= (java$lang$Math.I$min$I$I(arg1,var3))) {
      return var0;
     } else {
      var0.data[phi1] = (arg0.data[phi1]);
      phi1 = ((phi1 + 1)) | 0;
      // Here was a goto statement
      continue L1754288803;
     }
    }
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$nio$CharBuffer extends java$nio$Buffer {
  nativeObject = null;

  static ARRAY_BASE_OFFSET = 0;
  hb = null;
  offset = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$CharBuffer,
        'java.nio.CharBuffer',
         [java$lang$Readable,java$lang$Appendable,java$nio$CharBuffer,java$lang$CharSequence,java$lang$Comparable,java$nio$Buffer,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$Buffer.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$nio$CharBuffer.$i;
    var0 = (java$nio$CharBuffer.UNSAFE);
    java$nio$CharBuffer.ARRAY_BASE_OFFSET = ((jdk$internal$misc$Unsafe.prototype.I$arrayBaseOffset$Ljava$lang$Class$.call(var0,de$mirkosertic$bytecoder$classlib$Array.$rt)) | 0);
    return;
  }

  static Ljava$nio$CharBuffer$$allocate$I(arg0) {
    var var0 = null;
    if (arg0 >= 0) {
     java$nio$HeapCharBuffer.$i;
     var0 = new java$nio$HeapCharBuffer();
     java$nio$HeapCharBuffer.prototype.V$$init$$I$I$Ljava$lang$foreign$MemorySegment$.call(var0,arg0,arg0,null);
     return var0;
    } else {
     java$nio$CharBuffer.$i;
     throw bytecoder.registerStack((java$nio$Buffer.Ljava$lang$IllegalArgumentException$$createCapacityException$I(arg0)), new Error().stack);
    }
  }

  V$$init$$I$I$I$I$$C$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4,arg5,arg6) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$nio$Buffer.prototype.V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$.call(th,arg0,arg1,arg2,arg3,arg6);
    var0 = th;
    var0.hb = arg4;
    var1 = th;
    var1.offset = arg5;
    return;
  }

  Ljava$nio$CharBuffer$$put$Ljava$lang$String$(arg0) {
    var th = this;
    var var0 = 0;
    var0 = ((java$lang$String.prototype.I$length$$.call(arg0))) | 0;
    return (th.Ljava$nio$CharBuffer$$put$Ljava$lang$String$$I$I(arg0,0,var0));
  }

  Ljava$nio$CharBuffer$$put$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = null;
    var0 = ((arg2 - arg1)) | 0;
    var1 = ((java$lang$String.prototype.I$length$$.call(arg0))) | 0;
    var2 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var0,var1))) | 0;
    if ((th.Z$isReadOnly$$()) == 0) {
     var4 = ((arg2 - arg1)) | 0;
     if (var4 <= (th.I$remaining$$())) {
      phi6 = (arg1) | 0;
      L95981347: while(true) {
       if (phi6 >= arg2) {
        return th;
       } else {
        var7 = (phi6) | 0;
        var8 = (java$lang$String.prototype.C$charAt$I.call(arg0,var7));
        var9 = (th.Ljava$nio$CharBuffer$$put$C(var8));
        phi6 = ((phi6 + 1)) | 0;
        // Here was a goto statement
        continue L95981347;
       }
      }
     } else {
      var5 = new java$nio$BufferOverflowException();
      java$nio$BufferOverflowException.prototype.V$$init$$$.call(var5);
      throw bytecoder.registerStack(var5, new Error().stack);
     }
    } else {
     var3 = new java$nio$ReadOnlyBufferException();
     java$nio$ReadOnlyBufferException.prototype.V$$init$$$.call(var3);
     throw bytecoder.registerStack(var3, new Error().stack);
    }
  }

  Z$isEmpty$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.I$remaining$$()) != 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  I$length$$() {
    var th = this;
    return (th.I$remaining$$());
  }

  V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4) {
    var th = this;
    java$nio$CharBuffer.prototype.V$$init$$I$I$I$I$$C$I$Ljava$lang$foreign$MemorySegment$.call(th,arg0,arg1,arg2,arg3,null,0,arg4);
    return;
  }

  Ljava$nio$Buffer$$limit$I(arg0) {
    var th = this;
    return (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$limit$I.call(th,arg0));
  }

  Ljava$nio$CharBuffer$$limit$I(arg0) {
    var th = this;
    var var0 = null;
    var0 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$limit$I.call(th,arg0));
    return th;
  }

  Ljava$nio$Buffer$$position$I(arg0) {
    var th = this;
    return (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$position$I.call(th,arg0));
  }

  Ljava$nio$CharBuffer$$position$I(arg0) {
    var th = this;
    var var0 = null;
    var0 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$position$I.call(th,arg0));
    return th;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (java$nio$CharBuffer.prototype.I$compareTo$Ljava$nio$CharBuffer$.call(th,var0));
  }

  I$compareTo$Ljava$nio$CharBuffer$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var0 = ((th.I$position$$())) | 0;
    var1 = ((th.I$limit$$())) | 0;
    var2 = ((var1 - var0)) | 0;
    var3 = ((arg0.I$position$$())) | 0;
    var4 = ((arg0.I$limit$$())) | 0;
    var5 = ((var4 - var3)) | 0;
    java$lang$Math.$i;
    var6 = ((java$lang$Math.I$min$I$I(var2,var5))) | 0;
    if (var6 >= 0) {
     java$nio$BufferMismatch.$i;
     var7 = ((java$nio$BufferMismatch.I$mismatch$Ljava$nio$CharBuffer$$I$Ljava$nio$CharBuffer$$I$I(th,var0,arg0,var3,var6))) | 0;
     if (var7 < 0) {
      return (var2 - var5);
     } else {
      var8 = ((var0 + var7)) | 0;
      var9 = (th.C$get$I(var8));
      var10 = ((var3 + var7)) | 0;
      var11 = (arg0.C$get$I(var10));
      java$nio$CharBuffer.$i;
      return (java$nio$CharBuffer.I$compare$C$C(var9,var11));
     }
    } else {
     return -1;
    }
  }

  Ljava$lang$Object$$base$$() {
    var th = this;
    return (th.hb);
  }

  static I$compare$C$C(arg0,arg1) {
    return (java$lang$Character.I$compare$C$C(arg0,arg1));
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var0 = ((th.I$position$$())) | 0;
    var1 = ((th.I$limit$$())) | 0;
    return (th.Ljava$lang$String$$toString$I$I(var0,var1));
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var phi7 = 0;
    if (th != arg0) {
     if (bytecoder.instanceOf(arg0,java$nio$CharBuffer) != 0) {
      var0 = arg0;
      var1 = ((th.I$position$$())) | 0;
      var2 = ((th.I$limit$$())) | 0;
      var3 = ((var2 - var1)) | 0;
      var4 = ((var0.I$position$$())) | 0;
      var5 = ((var0.I$limit$$())) | 0;
      var6 = ((var5 - var4)) | 0;
      If_35_0: {
       if (var3 < 0) {
        break If_35_0;
       } else {
        if (var3 == var6) {
         java$nio$BufferMismatch.$i;
         If_46_0: {
          if ((java$nio$BufferMismatch.I$mismatch$Ljava$nio$CharBuffer$$I$Ljava$nio$CharBuffer$$I$I(th,var1,var0,var4,var3)) >= 0) {
           phi7 = (0) | 0;
           break If_46_0;
          } else {
           phi7 = (1) | 0;
           break If_46_0;
          }
         }
         return phi7;
        } else {
         break If_35_0;
        }
       }
      }
      return 0;
     } else {
      return 0;
     }
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var phi3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var0 = ((th.I$position$$())) | 0;
    var1 = (((th.I$limit$$()) - 1)) | 0;
    phi2 = (1) | 0;
    phi3 = (var1) | 0;
    L1649563548: while(true) {
     if (phi3 < var0) {
      return phi2;
     } else {
      var4 = ((31 * phi2)) | 0;
      var5 = (phi3) | 0;
      var6 = ((var4 + (th.C$get$I(var5)))) | 0;
      phi3 = ((phi3 + -1)) | 0;
      phi2 = (var6) | 0;
      continue L1649563548;
     }
    }
  }

  Ljava$nio$CharBuffer$$put$$C(arg0) {
    var th = this;
    var var0 = 0;
    var0 = (arg0.data.length) | 0;
    return (th.Ljava$nio$CharBuffer$$put$$C$I$I(arg0,0,var0));
  }

  Ljava$nio$CharBuffer$$put$$C$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    if ((th.Z$isReadOnly$$()) == 0) {
     var1 = (arg0.data.length) | 0;
     var2 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,arg2,var1))) | 0;
     var3 = ((th.I$position$$())) | 0;
     var4 = ((th.I$limit$$())) | 0;
     if (arg2 <= (var4 - var3)) {
      var6 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$putArray$I$$C$I$I.call(th,var3,arg0,arg1,arg2));
      var7 = ((var3 + arg2)) | 0;
      var8 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$position$I.call(th,var7));
      return th;
     } else {
      var5 = new java$nio$BufferOverflowException();
      java$nio$BufferOverflowException.prototype.V$$init$$$.call(var5);
      throw bytecoder.registerStack(var5, new Error().stack);
     }
    } else {
     var0 = new java$nio$ReadOnlyBufferException();
     java$nio$ReadOnlyBufferException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  Ljava$nio$CharBuffer$$putArray$I$$C$I$I(arg0,arg1,arg2,arg3) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = 0;
    var phi4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var phi14 = 0;
    var phi15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = null;
    If_7_0: {
     If_7_1: {
      if ((java$nio$CharBuffer.prototype.Z$isAddressable$$.call(th)) == 0) {
       break If_7_1;
      } else {
       if (((arg3 | 0) << 1) <= 6) {
        break If_7_1;
       } else {
        var0 = ((th.address) + ((arg0 | 0) << 1));
        java$nio$CharBuffer.$i;
        var1 = ((java$nio$CharBuffer.ARRAY_BASE_OFFSET) + ((arg2 | 0) << 1));
        var2 = ((arg3 | 0) << 1);
        phi3 = var0;
        phi4 = var1;
        TryCatch_38_0: {
         try {
          var6 = (th.Ljava$nio$ByteOrder$$order$$());
          java$nio$ByteOrder.$i;
          if (var6 == (java$nio$ByteOrder.Ljava$nio$ByteOrder$$nativeOrder$$())) {
           var10 = (java$nio$CharBuffer.SCOPED_MEMORY_ACCESS);
           var11 = (th.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
           var12 = phi4;
           jdk$internal$misc$ScopedMemoryAccess.prototype.V$copyMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call(var10,null,var11,arg1,var12,(java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(th)),phi3,var2);
           break TryCatch_38_0;
          } else {
           var7 = (java$nio$CharBuffer.SCOPED_MEMORY_ACCESS);
           var8 = (th.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
           var9 = phi4;
           jdk$internal$misc$ScopedMemoryAccess.prototype.V$copySwapMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J.call(var7,null,var8,arg1,var9,(java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(th)),phi3,var2,2);
           break TryCatch_38_0;
          }
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           TryCatch_39_0: {
            var5 = __ex;
            break TryCatch_39_0;
           }
           java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(th);
           throw bytecoder.registerStack(var5, new Error().stack);
          }
          throw __ex;
         }
        }
        java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(th);
        break If_7_0;
       }
      }
     }
     var13 = ((arg2 + arg3)) | 0;
     phi14 = (arg2) | 0;
     phi15 = (arg0) | 0;
     L358693944: while(true) {
      if (phi14 >= var13) {
       phi3 = var13;
       phi4 = phi15;
       break If_7_0;
      } else {
       var16 = (phi15) | 0;
       var17 = (arg1.data[phi14]);
       var18 = (th.Ljava$nio$CharBuffer$$put$I$C(var16,var17));
       phi14 = ((phi14 + 1)) | 0;
       phi15 = ((phi15 + 1)) | 0;
       // Here was a goto statement
       continue L358693944;
      }
     }
    }
    return th;
  }

  Z$isAddressable$$() {
    return 1;
  }
}


class jdk$internal$util$Preconditions$1 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$util$Preconditions$1,
        'jdk.internal.util.Preconditions$1',
         [java$util$function$Function,jdk$internal$util$Preconditions$1,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$ = impl;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$Object$$apply$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (jdk$internal$util$Preconditions$1.prototype.Ljava$lang$StringIndexOutOfBoundsException$$apply$Ljava$lang$String$.call(th,var0));
  }

  Ljava$lang$StringIndexOutOfBoundsException$$apply$Ljava$lang$String$(arg0) {
    var var0 = null;
    var0 = new java$lang$StringIndexOutOfBoundsException();
    java$lang$StringIndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var0,arg0);
    return var0;
  }
}


class java$nio$charset$Charset extends java$lang$Object {
  nativeObject = null;

  static defaultCharset = null;
  canonicalName = null;
  aliases = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$charset$Charset,
        'java.nio.charset.Charset',
         [java$nio$charset$Charset,java$lang$Comparable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$nio$charset$Charset$$defaultCharset$$() {
    var var0 = null;
    If_3_0: {
     if ((java$nio$charset$Charset.defaultCharset) != null) {
      break If_3_0;
     } else {
      var0 = new de$mirkosertic$bytecoder$classlib$BytecoderCharset();
      de$mirkosertic$bytecoder$classlib$BytecoderCharset.prototype.V$$init$$Ljava$lang$String$$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[69],bytecoder.newarray((0),null));
      java$nio$charset$Charset.defaultCharset = var0;
      break If_3_0;
     }
    }
    return (java$nio$charset$Charset.defaultCharset);
  }

  V$$init$$Ljava$lang$String$$$Ljava$lang$String$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.canonicalName = arg0;
    var1 = th;
    var1.aliases = arg1;
    return;
  }

  Ljava$lang$String$$name$$() {
    var th = this;
    return (th.canonicalName);
  }
}


class java$lang$StringBuilder extends java$lang$AbstractStringBuilder {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$StringBuilder,
        'java.lang.StringBuilder',
         [java$lang$AbstractStringBuilder,java$lang$CharSequence,java$lang$StringBuilder,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.I$length$$ = impl;
  }

  V$$init$$$() {
    var th = this;
    java$lang$StringBuilder.prototype.V$$init$$I.call(th,10);
    return;
  }

  V$$init$$I(arg0) {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    java$lang$StringBuilder.prototype.V$initializeWith$I.call(th,arg0);
    return;
  }

  V$initializeWith$I(arg0) {
    bytecoder.imports['java.lang.StringBuilder'].V$initializeWith$I(this, arg0);
  }

  Ljava$lang$StringBuilder$$append$Ljava$lang$String$(arg0) {
    return bytecoder.imports['java.lang.StringBuilder'].Ljava$lang$StringBuilder$$append$Ljava$lang$String$(this, arg0);
  }

  Ljava$lang$StringBuilder$$append$I(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Integer.$i;
    var0 = (java$lang$Integer.Ljava$lang$String$$toString$I(arg0));
    return (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(th,var0));
  }

  Ljava$lang$String$$toString$$() {
    return bytecoder.imports['java.lang.StringBuilder'].Ljava$lang$String$$toString$$(this);
  }

  Ljava$lang$StringBuilder$$append$F(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Float.$i;
    var0 = (java$lang$Float.Ljava$lang$String$$toString$F(arg0));
    return (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(th,var0));
  }

  Ljava$lang$StringBuilder$$append$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    if (arg0 == null) {
     return (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(th,bytecoder.stringconstants[0]));
    } else {
     var0 = (arg0.Ljava$lang$String$$toString$$());
     return (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(th,var0));
    }
  }

  Ljava$lang$StringBuilder$$append$C(arg0) {
    var th = this;
    var var0 = null;
    var0 = (java$lang$Character.Ljava$lang$String$$toString$C(arg0));
    return (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(th,var0));
  }
}

java$lang$StringBuilder.prototype.Z$isEmpty$$ = java$lang$CharSequence.prototype.Z$isEmpty$$;

class java$util$HashMap$Node extends java$lang$Object {
  nativeObject = null;

  next = null;
  hash = 0;
  key = null;
  value = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$HashMap$Node,
        'java.util.HashMap$Node',
         [java$util$Map$Entry,java$util$HashMap$Node,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.hash = arg0;
    var1 = th;
    var1.key = arg1;
    var2 = th;
    var2.value = arg2;
    var3 = th;
    var3.next = arg3;
    return;
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = (th.key);
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var0,var1));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[104]));
    var4 = (th.value);
    var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var3,var4));
    return (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var5));
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = 0;
    if (arg0 != th) {
     If_9_0: {
      If_9_1: {
       if (bytecoder.instanceOf(arg0,java$util$Map$Entry) == 0) {
        break If_9_1;
       } else {
        var0 = arg0;
        var1 = (th.key);
        var2 = (var0.Ljava$lang$Object$$getKey$$());
        if ((java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(var1,var2)) == 0) {
         break If_9_1;
        } else {
         var3 = (th.value);
         var4 = (var0.Ljava$lang$Object$$getValue$$());
         if ((java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(var3,var4)) == 0) {
          break If_9_1;
         } else {
          phi5 = (1) | 0;
          break If_9_0;
         }
        }
       }
      }
      phi5 = (0) | 0;
      break If_9_0;
     }
     return phi5;
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var0 = (th.key);
    var1 = ((java$util$Objects.I$hashCode$Ljava$lang$Object$(var0))) | 0;
    var2 = (th.value);
    return (var1 ^ (java$util$Objects.I$hashCode$Ljava$lang$Object$(var2)));
  }

  Ljava$lang$Object$$getKey$$() {
    var th = this;
    return (th.key);
  }

  Ljava$lang$Object$$getValue$$() {
    var th = this;
    return (th.value);
  }
}


class java$util$Hashtable extends java$util$Dictionary {
  nativeObject = null;

  modCount = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Hashtable,
        'java.util.Hashtable',
         [java$util$Hashtable,java$io$Serializable,java$util$Map,java$util$Dictionary,java$lang$Cloneable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Void$(arg0) {
    var th = this;
    var var0 = null;
    java$util$Dictionary.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.modCount = 0;
    return;
  }
}

java$util$Hashtable.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$ = java$util$Map.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$;

class jdk$internal$util$Preconditions$2 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$util$Preconditions$2,
        'jdk.internal.util.Preconditions$2',
         [jdk$internal$util$Preconditions$2,java$util$function$Function,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$ = impl;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$Object$$apply$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (jdk$internal$util$Preconditions$2.prototype.Ljava$lang$ArrayIndexOutOfBoundsException$$apply$Ljava$lang$String$.call(th,var0));
  }

  Ljava$lang$ArrayIndexOutOfBoundsException$$apply$Ljava$lang$String$(arg0) {
    var var0 = null;
    var0 = new java$lang$ArrayIndexOutOfBoundsException();
    java$lang$ArrayIndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var0,arg0);
    return var0;
  }
}


class java$lang$Exception extends java$lang$Throwable {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Exception,
        'java.lang.Exception',
         [java$lang$Exception,java$lang$Throwable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$Throwable.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Throwable.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$Throwable.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$util$KeyValueHolder extends java$lang$Object {
  nativeObject = null;

  key = null;
  value = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$KeyValueHolder,
        'java.util.KeyValueHolder',
         [java$util$KeyValueHolder,java$util$Map$Entry,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.key = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0));
    var1 = th;
    var1.value = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg1));
    return;
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = (th.key);
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var0,var1));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[104]));
    var4 = (th.value);
    var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var3,var4));
    return (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var5));
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = 0;
    If_5_0: {
     If_5_1: {
      if (bytecoder.instanceOf(arg0,java$util$Map$Entry) == 0) {
       break If_5_1;
      } else {
       var0 = arg0;
       var1 = (th.key);
       var2 = (var0.Ljava$lang$Object$$getKey$$());
       if ((var1.Z$equals$Ljava$lang$Object$(var2)) == 0) {
        break If_5_1;
       } else {
        var3 = (th.value);
        var4 = (var0.Ljava$lang$Object$$getValue$$());
        if ((var3.Z$equals$Ljava$lang$Object$(var4)) == 0) {
         break If_5_1;
        } else {
         phi5 = (1) | 0;
         break If_5_0;
        }
       }
      }
     }
     phi5 = (0) | 0;
     break If_5_0;
    }
    return phi5;
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var0 = (th.key);
    var1 = ((var0.I$hashCode$$())) | 0;
    var2 = (th.value);
    return (var1 ^ (var2.I$hashCode$$()));
  }

  Ljava$lang$Object$$getKey$$() {
    var th = this;
    return (th.key);
  }

  Ljava$lang$Object$$getValue$$() {
    var th = this;
    return (th.value);
  }
}


class de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder extends java$nio$charset$CharsetDecoder {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder,
        'de.mirkosertic.bytecoder.classlib.BytecoderCharsetDecoder',
         [de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder,java$nio$charset$CharsetDecoder,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$charset$CharsetDecoder.$i;
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.Ljava$nio$charset$CoderResult$$decodeLoop$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$ = impl;
  }

  V$$init$$Ljava$nio$charset$Charset$(arg0) {
    var th = this;
    java$nio$charset$CharsetDecoder.prototype.V$$init$$Ljava$nio$charset$Charset$$F$F.call(th,arg0,1.1,3.0);
    return;
  }

  Ljava$nio$charset$CoderResult$$decodeLoop$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var0 = (th.Ljava$nio$charset$Charset$$charset$$());
    If_8_0: {
     if ((arg0.Z$hasRemaining$$()) == 0) {
      break If_8_0;
     } else {
      var1 = ((arg0.I$remaining$$())) | 0;
      var2 = bytecoder.newarray((var1),0);
      var3 = (arg0.Ljava$nio$ByteBuffer$$get$$B$I$I(var2,0,var1));
      var4 = (java$nio$charset$Charset.prototype.Ljava$lang$String$$name$$.call(var0));
      var5 = (de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder.prototype.$C$decodeFromBytes$Ljava$lang$String$$$B.call(th,var4,var2));
      var6 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$put$$C.call(arg1,var5));
      break If_8_0;
     }
    }
    java$nio$charset$CoderResult.$i;
    return (java$nio$charset$CoderResult.UNDERFLOW);
  }

  $C$decodeFromBytes$Ljava$lang$String$$$B(arg0,arg1) {
    return bytecoder.imports['de.mirkosertic.bytecoder.classlib.BytecoderCharsetDecoder'].$C$decodeFromBytes$Ljava$lang$String$$$B(this, arg0, arg1);
  }
}


class java$nio$ByteBuffer extends java$nio$Buffer {
  nativeObject = null;

  static ARRAY_BASE_OFFSET = 0;
  bigEndian = 0;
  nativeByteOrder = 0;
  hb = null;
  offset = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$ByteBuffer,
        'java.nio.ByteBuffer',
         [java$nio$ByteBuffer,java$lang$Comparable,java$nio$Buffer,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$Buffer.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$nio$ByteBuffer.$i;
    var0 = (java$nio$ByteBuffer.UNSAFE);
    java$nio$ByteBuffer.ARRAY_BASE_OFFSET = ((jdk$internal$misc$Unsafe.prototype.I$arrayBaseOffset$Ljava$lang$Class$.call(var0,de$mirkosertic$bytecoder$classlib$Array.$rt)) | 0);
    return;
  }

  static Ljava$nio$ByteBuffer$$wrap$$B(arg0) {
    var var0 = 0;
    var0 = (arg0.data.length) | 0;
    java$nio$ByteBuffer.$i;
    return (java$nio$ByteBuffer.Ljava$nio$ByteBuffer$$wrap$$B$I$I(arg0,0,var0));
  }

  static Ljava$nio$ByteBuffer$$wrap$$B$I$I(arg0,arg1,arg2) {
    var var0 = null;
    var var1 = null;
    TryCatch_4_0: {
     try {
      java$nio$HeapByteBuffer.$i;
      var1 = new java$nio$HeapByteBuffer();
      java$nio$HeapByteBuffer.prototype.V$$init$$$B$I$I$Ljava$lang$foreign$MemorySegment$.call(var1,arg0,arg1,arg2,null);
      break TryCatch_4_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$IllegalArgumentException) {
       var0 = new java$lang$IndexOutOfBoundsException();
       java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(var0);
       throw bytecoder.registerStack(var0, new Error().stack);
      }
      throw __ex;
     }
    }
    return var1;
  }

  V$$init$$I$I$I$I$$B$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4,arg5,arg6) {
    var th = this;
    var var0 = null;
    var phi1 = null;
    var phi2 = 0;
    var var3 = null;
    var var4 = null;
    java$nio$Buffer.prototype.V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$.call(th,arg0,arg1,arg2,arg3,arg6);
    var0 = th;
    var0.bigEndian = 1;
    java$nio$ByteOrder.$i;
    If_18_0: {
     if ((java$nio$ByteOrder.Ljava$nio$ByteOrder$$nativeOrder$$()) != (java$nio$ByteOrder.BIG_ENDIAN)) {
      phi1 = th;
      phi2 = (0) | 0;
      break If_18_0;
     } else {
      phi1 = th;
      phi2 = (1) | 0;
      break If_18_0;
     }
    }
    phi1.nativeByteOrder = phi2;
    var3 = th;
    var3.hb = arg4;
    var4 = th;
    var4.offset = arg5;
    return;
  }

  static Ljava$nio$ByteBuffer$$allocate$I(arg0) {
    var var0 = null;
    if (arg0 >= 0) {
     java$nio$HeapByteBuffer.$i;
     var0 = new java$nio$HeapByteBuffer();
     java$nio$HeapByteBuffer.prototype.V$$init$$I$I$Ljava$lang$foreign$MemorySegment$.call(var0,arg0,arg0,null);
     return var0;
    } else {
     java$nio$ByteBuffer.$i;
     throw bytecoder.registerStack((java$nio$Buffer.Ljava$lang$IllegalArgumentException$$createCapacityException$I(arg0)), new Error().stack);
    }
  }

  Ljava$nio$ByteBuffer$$position$I(arg0) {
    var th = this;
    var var0 = null;
    var0 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$position$I.call(th,arg0));
    return th;
  }

  V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4) {
    var th = this;
    java$nio$ByteBuffer.prototype.V$$init$$I$I$I$I$$B$I$Ljava$lang$foreign$MemorySegment$.call(th,arg0,arg1,arg2,arg3,null,0,arg4);
    return;
  }

  Ljava$nio$Buffer$$limit$I(arg0) {
    var th = this;
    return (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$limit$I.call(th,arg0));
  }

  Ljava$nio$ByteBuffer$$limit$I(arg0) {
    var th = this;
    var var0 = null;
    var0 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$limit$I.call(th,arg0));
    return th;
  }

  Ljava$nio$Buffer$$position$I(arg0) {
    var th = this;
    return (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$position$I.call(th,arg0));
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (java$nio$ByteBuffer.prototype.I$compareTo$Ljava$nio$ByteBuffer$.call(th,var0));
  }

  I$compareTo$Ljava$nio$ByteBuffer$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var0 = ((th.I$position$$())) | 0;
    var1 = ((th.I$limit$$())) | 0;
    var2 = ((var1 - var0)) | 0;
    var3 = ((arg0.I$position$$())) | 0;
    var4 = ((arg0.I$limit$$())) | 0;
    var5 = ((var4 - var3)) | 0;
    java$lang$Math.$i;
    var6 = ((java$lang$Math.I$min$I$I(var2,var5))) | 0;
    if (var6 >= 0) {
     java$nio$BufferMismatch.$i;
     var7 = ((java$nio$BufferMismatch.I$mismatch$Ljava$nio$ByteBuffer$$I$Ljava$nio$ByteBuffer$$I$I(th,var0,arg0,var3,var6))) | 0;
     if (var7 < 0) {
      return (var2 - var5);
     } else {
      var8 = ((var0 + var7)) | 0;
      var9 = (th.B$get$I(var8));
      var10 = ((var3 + var7)) | 0;
      var11 = (arg0.B$get$I(var10));
      java$nio$ByteBuffer.$i;
      return (java$nio$ByteBuffer.I$compare$B$B(var9,var11));
     }
    } else {
     return -1;
    }
  }

  Ljava$lang$Object$$base$$() {
    var th = this;
    return (th.hb);
  }

  static I$compare$B$B(arg0,arg1) {
    java$lang$Byte.$i;
    return (java$lang$Byte.I$compare$B$B(arg0,arg1));
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = null;
    var var13 = null;
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = ((th).constructor.$rt);
    var2 = (java$lang$Class.prototype.Ljava$lang$String$$getName$$.call(var1));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var0,var2));
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var3,bytecoder.stringconstants[101]));
    var5 = ((th.I$position$$())) | 0;
    var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var4,var5));
    var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var6,bytecoder.stringconstants[102]));
    var8 = ((th.I$limit$$())) | 0;
    var9 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var7,var8));
    var10 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var9,bytecoder.stringconstants[103]));
    var11 = ((th.I$capacity$$())) | 0;
    var12 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var10,var11));
    var13 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var12,bytecoder.stringconstants[82]));
    return (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var13));
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var phi7 = 0;
    if (th != arg0) {
     if (bytecoder.instanceOf(arg0,java$nio$ByteBuffer) != 0) {
      var0 = arg0;
      var1 = ((th.I$position$$())) | 0;
      var2 = ((th.I$limit$$())) | 0;
      var3 = ((var2 - var1)) | 0;
      var4 = ((var0.I$position$$())) | 0;
      var5 = ((var0.I$limit$$())) | 0;
      var6 = ((var5 - var4)) | 0;
      If_35_0: {
       if (var3 < 0) {
        break If_35_0;
       } else {
        if (var3 == var6) {
         java$nio$BufferMismatch.$i;
         If_46_0: {
          if ((java$nio$BufferMismatch.I$mismatch$Ljava$nio$ByteBuffer$$I$Ljava$nio$ByteBuffer$$I$I(th,var1,var0,var4,var3)) >= 0) {
           phi7 = (0) | 0;
           break If_46_0;
          } else {
           phi7 = (1) | 0;
           break If_46_0;
          }
         }
         return phi7;
        } else {
         break If_35_0;
        }
       }
      }
      return 0;
     } else {
      return 0;
     }
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var phi3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var0 = ((th.I$position$$())) | 0;
    var1 = (((th.I$limit$$()) - 1)) | 0;
    phi2 = (1) | 0;
    phi3 = (var1) | 0;
    L1892842734: while(true) {
     if (phi3 < var0) {
      return phi2;
     } else {
      var4 = ((31 * phi2)) | 0;
      var5 = (phi3) | 0;
      var6 = ((var4 + (th.B$get$I(var5)))) | 0;
      phi3 = ((phi3 + -1)) | 0;
      phi2 = (var6) | 0;
      continue L1892842734;
     }
    }
  }

  Ljava$nio$ByteBuffer$$get$$B$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var0 = (arg0.data.length) | 0;
    var1 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,arg2,var0))) | 0;
    var2 = ((th.I$position$$())) | 0;
    var3 = ((th.I$limit$$())) | 0;
    if (arg2 <= (var3 - var2)) {
     var5 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$getArray$I$$B$I$I.call(th,var2,arg0,arg1,arg2));
     var6 = ((var2 + arg2)) | 0;
     var7 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$position$I.call(th,var6));
     return th;
    } else {
     var4 = new java$nio$BufferUnderflowException();
     java$nio$BufferUnderflowException.prototype.V$$init$$$.call(var4);
     throw bytecoder.registerStack(var4, new Error().stack);
    }
  }

  Ljava$nio$ByteBuffer$$getArray$I$$B$I$I(arg0,arg1,arg2,arg3) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = 0;
    var phi4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var phi9 = 0;
    var phi10 = 0;
    var var11 = 0;
    var var12 = 0;
    If_10_0: {
     if (((arg3 | 0) << 0) <= 6) {
      var8 = ((arg2 + arg3)) | 0;
      phi9 = (arg2) | 0;
      phi10 = (arg0) | 0;
      L1075669513: while(true) {
       if (phi9 >= var8) {
        phi3 = var8;
        phi4 = phi10;
        break If_10_0;
       } else {
        var11 = (phi9) | 0;
        var12 = (phi10) | 0;
        arg1.data[var11] = (th.B$get$I(var12));
        phi9 = ((phi9 + 1)) | 0;
        phi10 = ((phi10 + 1)) | 0;
        // Here was a goto statement
        continue L1075669513;
       }
      }
     } else {
      var0 = ((th.address) + ((arg0 | 0) << 0));
      java$nio$ByteBuffer.$i;
      var1 = ((java$nio$ByteBuffer.ARRAY_BASE_OFFSET) + ((arg2 | 0) << 0));
      var2 = ((arg3 | 0) << 0);
      phi3 = var0;
      phi4 = var1;
      TryCatch_34_0: {
       try {
        var6 = (java$nio$ByteBuffer.SCOPED_MEMORY_ACCESS);
        var7 = (th.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
        jdk$internal$misc$ScopedMemoryAccess.prototype.V$copyMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call(var6,var7,null,(java$nio$ByteBuffer.prototype.Ljava$lang$Object$$base$$.call(th)),phi3,arg1,phi4,var2);
        break TryCatch_34_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_35_0: {
          var5 = __ex;
          break TryCatch_35_0;
         }
         java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(th);
         throw bytecoder.registerStack(var5, new Error().stack);
        }
        throw __ex;
       }
      }
      java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(th);
      break If_10_0;
     }
    }
    return th;
  }
}


class java$util$ImmutableCollections$MapN$MapNIterator extends java$lang$Object {
  nativeObject = null;

  this$0 = null;
  remaining = 0;
  idx = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$MapN$MapNIterator,
        'java.util.ImmutableCollections$MapN$MapNIterator',
         [java$util$Iterator,java$util$ImmutableCollections$MapN$MapNIterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$ImmutableCollections$MapN$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = th;
    var0.this$0 = arg0;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var1 = th;
    var1.remaining = (arg0.size);
    var2 = th;
    java$util$ImmutableCollections.$i;
    var2.idx = (((((java$util$ImmutableCollections.SALT32L) * (((arg0.table).data.length >> 1) | 0)) >>> 32) | 0) << 1);
    return;
  }

  Z$hasNext$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.remaining) <= 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  Ljava$lang$Object$$next$$() {
    var th = this;
    return (java$util$ImmutableCollections$MapN$MapNIterator.prototype.Ljava$util$Map$Entry$$next$$.call(th));
  }

  Ljava$util$Map$Entry$$next$$() {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    If_3_0: {
     if ((th.remaining) <= 0) {
      var7 = new java$util$NoSuchElementException();
      java$util$NoSuchElementException.prototype.V$$init$$$.call(var7);
      throw bytecoder.registerStack(var7, new Error().stack);
     } else {
      break If_3_0;
     }
    }
    L1595653907: while(true) {
     var0 = ((th.this$0).table);
     var1 = ((java$util$ImmutableCollections$MapN$MapNIterator.prototype.I$nextIndex$$.call(th))) | 0;
     if ((var0.data[var1]) != null) {
      var2 = new java$util$KeyValueHolder();
      var3 = ((th.this$0).table);
      var4 = (var3.data[var1]);
      var5 = ((th.this$0).table);
      java$util$KeyValueHolder.prototype.V$$init$$Ljava$lang$Object$$Ljava$lang$Object$.call(var2,var4,(var5.data[(var1 + 1)]));
      var6 = th;
      var6.remaining = ((var6.remaining) - 1);
      return var2;
     } else {
      // Here was a goto statement
      continue L1595653907;
     }
    }
  }

  I$nextIndex$$() {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var0 = ((th.idx)) | 0;
    java$util$ImmutableCollections.$i;
    If_8_0: {
     if ((java$util$ImmutableCollections.REVERSE) == 0) {
      var5 = ((var0 + -2)) | 0;
      if (var5 >= 0) {
       phi2 = (var5) | 0;
       break If_8_0;
      } else {
       phi2 = ((((th.this$0).table).data.length - 2)) | 0;
       break If_8_0;
      }
     } else {
      var1 = ((var0 + 2)) | 0;
      if (var1 < ((th.this$0).table).data.length) {
       phi2 = (var1) | 0;
       break If_8_0;
      } else {
       phi2 = (0) | 0;
       break If_8_0;
      }
     }
    }
    var3 = th;
    var4 = (phi2) | 0;
    var3.idx = var4;
    return var4;
  }
}


class de$mirkosertic$bytecoder$classlib$VM$1 extends java$lang$ClassLoader {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        de$mirkosertic$bytecoder$classlib$VM$1,
        'de.mirkosertic.bytecoder.classlib.VM$1',
         [de$mirkosertic$bytecoder$classlib$VM$1,java$lang$ClassLoader,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$ClassLoader.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$lang$Error extends java$lang$Throwable {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Error,
        'java.lang.Error',
         [java$lang$Throwable,java$lang$Error,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$Throwable.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$Throwable.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Throwable.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$lang$ref$WeakReference extends java$lang$ref$Reference {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$ref$WeakReference,
        'java.lang.ref.WeakReference',
         [java$lang$ref$WeakReference,java$lang$ref$Reference,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    var th = this;
    de$mirkosertic$bytecoder$classlib$java$lang$ref$TReference.prototype.V$$init$$Ljava$lang$Object$.call(th,arg0);
    return;
  }
}


class jdk$internal$util$Preconditions$3 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$util$Preconditions$3,
        'jdk.internal.util.Preconditions$3',
         [java$util$function$Function,jdk$internal$util$Preconditions$3,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$ = impl;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$Object$$apply$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (jdk$internal$util$Preconditions$3.prototype.Ljava$lang$IndexOutOfBoundsException$$apply$Ljava$lang$String$.call(th,var0));
  }

  Ljava$lang$IndexOutOfBoundsException$$apply$Ljava$lang$String$(arg0) {
    var var0 = null;
    var0 = new java$lang$IndexOutOfBoundsException();
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var0,arg0);
    return var0;
  }
}


class java$util$HashMap$EntryIterator extends java$util$HashMap$HashIterator {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$HashMap$EntryIterator,
        'java.util.HashMap$EntryIterator',
         [java$util$Iterator,java$util$HashMap$HashIterator,java$util$HashMap$EntryIterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$HashMap$(arg0) {
    var th = this;
    java$util$HashMap$HashIterator.prototype.V$$init$$Ljava$util$HashMap$.call(th,arg0);
    return;
  }

  Ljava$lang$Object$$next$$() {
    var th = this;
    return (java$util$HashMap$EntryIterator.prototype.Ljava$util$Map$Entry$$next$$.call(th));
  }

  Ljava$util$Map$Entry$$next$$() {
    var th = this;
    return (th.Ljava$util$HashMap$Node$$nextNode$$());
  }
}


class java$util$ListIterator extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ListIterator,
        'java.util.ListIterator',
         [java$util$Iterator,java$util$ListIterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$concurrent$locks$ReentrantLock extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$concurrent$locks$ReentrantLock,
        'java.util.concurrent.locks.ReentrantLock',
         [java$util$concurrent$locks$ReentrantLock,java$util$concurrent$locks$Lock,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$nio$Buffer$1 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$Buffer$1,
        'java.nio.Buffer$1',
         [jdk$internal$access$JavaNioAccess,java$nio$Buffer$1,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$AbstractList$Itr extends java$lang$Object {
  nativeObject = null;

  this$0 = null;
  cursor = 0;
  lastRet = 0;
  expectedModCount = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$AbstractList$Itr,
        'java.util.AbstractList$Itr',
         [java$util$AbstractList$Itr,java$util$Iterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$AbstractList$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = th;
    var0.this$0 = arg0;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var1 = th;
    var1.cursor = 0;
    var2 = th;
    var2.lastRet = -1;
    var3 = th;
    var3.expectedModCount = ((th.this$0).modCount);
    return;
  }

  Ljava$lang$Object$$next$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    java$util$AbstractList$Itr.prototype.V$checkForComodification$$.call(th);
    TryCatch_3_0: {
     try {
      var2 = ((th.cursor)) | 0;
      var3 = (th.this$0);
      var4 = (var3.Ljava$lang$Object$$get$I(var2));
      var5 = th;
      var5.lastRet = var2;
      var6 = th;
      var6.cursor = (var2 + 1);
      break TryCatch_3_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$IndexOutOfBoundsException) {
       var0 = __ex;
       java$util$AbstractList$Itr.prototype.V$checkForComodification$$.call(th);
       var1 = new java$util$NoSuchElementException();
       java$util$NoSuchElementException.prototype.V$$init$$Ljava$lang$Throwable$.call(var1,var0);
       throw bytecoder.registerStack(var1, new Error().stack);
      }
      throw __ex;
     }
    }
    return var4;
  }

  V$checkForComodification$$() {
    var th = this;
    var var0 = null;
    if (((th.this$0).modCount) == (th.expectedModCount)) {
     return;
    } else {
     var0 = new java$util$ConcurrentModificationException();
     java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  Z$hasNext$$() {
    var th = this;
    var var0 = 0;
    var var1 = null;
    var phi2 = 0;
    var0 = ((th.cursor)) | 0;
    var1 = (th.this$0);
    If_9_0: {
     if (var0 == (var1.I$size$$())) {
      phi2 = (0) | 0;
      break If_9_0;
     } else {
      phi2 = (1) | 0;
      break If_9_0;
     }
    }
    return phi2;
  }
}


class java$util$ImmutableCollections$SetN$SetNIterator extends java$lang$Object {
  nativeObject = null;

  this$0 = null;
  remaining = 0;
  idx = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$SetN$SetNIterator,
        'java.util.ImmutableCollections$SetN$SetNIterator',
         [java$util$Iterator,java$util$ImmutableCollections$SetN$SetNIterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$ImmutableCollections$SetN$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = th;
    var0.this$0 = arg0;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var1 = th;
    var1.remaining = (arg0.size);
    var2 = th;
    java$util$ImmutableCollections.$i;
    var2.idx = ((((java$util$ImmutableCollections.SALT32L) * ((arg0.elements).data.length | 0)) >>> 32) | 0);
    return;
  }

  Z$hasNext$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.remaining) <= 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  Ljava$lang$Object$$next$$() {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var phi3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    if ((th.remaining) <= 0) {
     var7 = new java$util$NoSuchElementException();
     java$util$NoSuchElementException.prototype.V$$init$$$.call(var7);
     throw bytecoder.registerStack(var7, new Error().stack);
    } else {
     var0 = ((th.idx)) | 0;
     var1 = (((th.this$0).elements).data.length) | 0;
     phi2 = (var0) | 0;
     L62313083: while(true) {
      java$util$ImmutableCollections.$i;
      If_19_0: {
       if ((java$util$ImmutableCollections.REVERSE) == 0) {
        phi2 = ((phi2 + -1)) | 0;
        if (phi2 >= 0) {
         phi3 = (phi2) | 0;
         break If_19_0;
        } else {
         phi3 = ((var1 - 1)) | 0;
         break If_19_0;
        }
       } else {
        phi2 = ((phi2 + 1)) | 0;
        if (phi2 < var1) {
         phi3 = (phi2) | 0;
         break If_19_0;
        } else {
         phi3 = (0) | 0;
         break If_19_0;
        }
       }
      }
      var4 = (((th.this$0).elements).data[phi3]);
      if (var4 == null) {
       phi2 = (phi3) | 0;
       continue L62313083;
      } else {
       var5 = th;
       var5.idx = phi3;
       var6 = th;
       var6.remaining = ((var6.remaining) - 1);
       return var4;
      }
     }
    }
  }
}


class java$lang$Number extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Number,
        'java.lang.Number',
         [java$lang$Number,java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.I$intValue$$ = impl;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  B$byteValue$$() {
    var th = this;
    return (th.I$intValue$$());
  }

  S$shortValue$$() {
    var th = this;
    return (th.I$intValue$$());
  }
}


class java$util$ArrayList$Itr extends java$lang$Object {
  nativeObject = null;

  this$0 = null;
  lastRet = 0;
  expectedModCount = 0;
  cursor = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ArrayList$Itr,
        'java.util.ArrayList$Itr',
         [java$util$ArrayList$Itr,java$util$Iterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$ArrayList$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = th;
    var0.this$0 = arg0;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var1 = th;
    var1.lastRet = -1;
    var2 = th;
    var2.expectedModCount = ((th.this$0).modCount);
    return;
  }

  Ljava$lang$Object$$next$$() {
    var th = this;
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    java$util$ArrayList$Itr.prototype.V$checkForComodification$$.call(th);
    var0 = ((th.cursor)) | 0;
    if (var0 < ((th.this$0).size)) {
     var2 = ((th.this$0).elementData);
     if (var0 < var2.data.length) {
      var4 = th;
      var4.cursor = (var0 + 1);
      var5 = th;
      var5.lastRet = var0;
      return (var2.data[var0]);
     } else {
      var3 = new java$util$ConcurrentModificationException();
      java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var3);
      throw bytecoder.registerStack(var3, new Error().stack);
     }
    } else {
     var1 = new java$util$NoSuchElementException();
     java$util$NoSuchElementException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$checkForComodification$$() {
    var th = this;
    var var0 = null;
    if (((th.this$0).modCount) == (th.expectedModCount)) {
     return;
    } else {
     var0 = new java$util$ConcurrentModificationException();
     java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  Z$hasNext$$() {
    var th = this;
    var phi0 = 0;
    If_5_0: {
     if ((th.cursor) == ((th.this$0).size)) {
      phi0 = (0) | 0;
      break If_5_0;
     } else {
      phi0 = (1) | 0;
      break If_5_0;
     }
    }
    return phi0;
  }
}


class java$util$Collection extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Collection,
        'java.util.Collection',
         [java$util$Collection,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$String extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$String,
        'java.lang.String',
         [java$lang$CharSequence,java$lang$Comparable,java$lang$String,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  static Ljava$lang$String$$valueOf$Ljava$lang$Object$(arg0) {
    if (arg0 != null) {
     return (arg0.Ljava$lang$String$$toString$$());
    } else {
     return bytecoder.stringconstants[0];
    }
  }

  I$length$$() {
    return bytecoder.imports['java.lang.String'].I$length$$(this);
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    if (arg0 != null) {
     if (arg0 != th) {
      var0 = (arg0.Ljava$lang$String$$toString$$());
      return (java$lang$String.prototype.Z$equals0$Ljava$lang$String$.call(th,var0));
     } else {
      return 1;
     }
    } else {
     return 0;
    }
  }

  Z$equals0$Ljava$lang$String$(arg0) {
    return bytecoder.imports['java.lang.String'].Z$equals0$Ljava$lang$String$(this, arg0);
  }

  static Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(arg0,arg1) {
    return bytecoder.imports['java.lang.String'].Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(arg0, arg1);
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var phi1 = 0;
    var phi2 = 0;
    var var3 = 0;
    var0 = (java$lang$String.prototype.$B$getBytes$$.call(th));
    phi1 = (0) | 0;
    phi2 = (0) | 0;
    L762337113: while(true) {
     if (phi2 >= var0.data.length) {
      return phi1;
     } else {
      var3 = (((31 * phi1) + (var0.data[phi2]))) | 0;
      phi2 = ((phi2 + 1)) | 0;
      phi1 = (var3) | 0;
      continue L762337113;
     }
    }
  }

  $B$getBytes$$() {
    return bytecoder.imports['java.lang.String'].$B$getBytes$$(this);
  }

  C$charAt$I(arg0) {
    return bytecoder.imports['java.lang.String'].C$charAt$I(this, arg0);
  }

  I$compareTo$Ljava$lang$String$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var phi5 = 0;
    var var6 = 0;
    var var7 = 0;
    var0 = (java$lang$String.prototype.$C$toCharArray$$.call(th));
    var1 = (java$lang$String.prototype.$C$toCharArray$$.call(arg0));
    var2 = (var0.data.length) | 0;
    var3 = (var1.data.length) | 0;
    java$lang$Math.$i;
    var4 = ((java$lang$Math.I$min$I$I(var2,var3))) | 0;
    phi5 = (0) | 0;
    L680736246: while(true) {
     if (phi5 >= var4) {
      return (var2 - var3);
     } else {
      var6 = (var0.data[phi5]);
      var7 = (var1.data[phi5]);
      if (var6 == var7) {
       phi5 = ((phi5 + 1)) | 0;
       // Here was a goto statement
       continue L680736246;
      } else {
       return (var6 - var7);
      }
     }
    }
  }

  $C$toCharArray$$() {
    return bytecoder.imports['java.lang.String'].$C$toCharArray$$(this);
  }

  V$getChars$I$I$$C$I(arg0,arg1,arg2,arg3) {
    bytecoder.imports['java.lang.String'].V$getChars$I$I$$C$I(this, arg0, arg1, arg2, arg3);
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (java$lang$String.prototype.I$compareTo$Ljava$lang$String$.call(th,var0));
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    return th;
  }

  V$$init$$$C$I$I(arg0,arg1,arg2) {
    var th = this;
    java$lang$String.prototype.V$$init$$$.call(th);
    java$lang$String.prototype.V$initializeWith$$C$I$I.call(th,arg0,arg1,arg2);
    return;
  }

  V$initializeWith$$C$I$I(arg0,arg1,arg2) {
    bytecoder.imports['java.lang.String'].V$initializeWith$$C$I$I(this, arg0, arg1, arg2);
  }
}

java$lang$String.prototype.Z$isEmpty$$ = java$lang$CharSequence.prototype.Z$isEmpty$$;

class java$util$AbstractMap extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$AbstractMap,
        'java.util.AbstractMap',
         [java$util$AbstractMap,java$util$Map,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    var var0 = null;
    var0 = new java$lang$UnsupportedOperationException();
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var0);
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var phi7 = null;
    var var8 = null;
    var var9 = null;
    var phi10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var0 = (th.Ljava$util$Set$$entrySet$$());
    var1 = (var0.Ljava$util$Iterator$$iterator$$());
    if ((var1.Z$hasNext$$()) != 0) {
     var2 = new java$lang$StringBuilder();
     java$lang$StringBuilder.prototype.V$$init$$$.call(var2);
     var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var2,123));
     L1346796599: while(true) {
      var4 = (var1.Ljava$lang$Object$$next$$());
      var5 = (var4.Ljava$lang$Object$$getKey$$());
      var6 = (var4.Ljava$lang$Object$$getValue$$());
      If_34_0: {
       if (var5 != th) {
        phi7 = var5;
        break If_34_0;
       } else {
        phi7 = bytecoder.stringconstants[98];
        break If_34_0;
       }
      }
      var8 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var2,phi7));
      var9 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var2,61));
      If_46_0: {
       if (var6 != th) {
        phi10 = var6;
        break If_46_0;
       } else {
        phi10 = bytecoder.stringconstants[98];
        break If_46_0;
       }
      }
      var11 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var2,phi10));
      if ((var1.Z$hasNext$$()) != 0) {
       var13 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var2,44));
       var14 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var13,32));
       // Here was a goto statement
       continue L1346796599;
      } else {
       var12 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var2,125));
       return (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var12));
      }
     }
    } else {
     return bytecoder.stringconstants[97];
    }
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    if (arg0 != th) {
     if (bytecoder.instanceOf(arg0,java$util$Map) == 0) {
      return 0;
     } else {
      var0 = arg0;
      var1 = ((var0.I$size$$())) | 0;
      if (var1 == (th.I$size$$())) {
       TryCatch_23_0: {
        TryCatch_23_1: {
         try {
          var2 = (th.Ljava$util$Set$$entrySet$$());
          phi3 = (var2.Ljava$util$Iterator$$iterator$$());
          L2062242911: while(true) {
           var4 = phi3;
           if ((var4.Z$hasNext$$()) == 0) {
            return 1;
           } else {
            var5 = phi3;
            var6 = (var5.Ljava$lang$Object$$next$$());
            var7 = (var6.Ljava$lang$Object$$getKey$$());
            var8 = (var6.Ljava$lang$Object$$getValue$$());
            If_51_0: {
             if (var8 != null) {
              TryCatch_66_0: {
               try {
                var9 = (var0.Ljava$lang$Object$$get$Ljava$lang$Object$(var7));
                if ((var8.Z$equals$Ljava$lang$Object$(var9)) != 0) {
                 break If_51_0;
                } else {
                 break TryCatch_66_0;
                }
               } catch (__ex) {
                if (__ex instanceof java$lang$ClassCastException) {
                 return 0;
                }
                if (__ex instanceof java$lang$NullPointerException) {
                 return 0;
                }
                throw __ex;
               }
              }
              return 0;
             } else {
              If_54_0: {
               if ((var0.Ljava$lang$Object$$get$Ljava$lang$Object$(var7)) != null) {
                break If_54_0;
               } else {
                if ((var0.Z$containsKey$Ljava$lang$Object$(var7)) != 0) {
                 break If_51_0;
                } else {
                 break If_54_0;
                }
               }
              }
              break TryCatch_23_0;
             }
            }
            try {
             // Here was a goto statement
             continue L2062242911;
            } catch (__ex) {
             if (__ex instanceof java$lang$ClassCastException) {
              return 0;
             }
             if (__ex instanceof java$lang$NullPointerException) {
              return 0;
             }
             throw __ex;
            }
           }
          }
         } catch (__ex) {
          if (__ex instanceof java$lang$ClassCastException) {
           return 0;
          }
          if (__ex instanceof java$lang$NullPointerException) {
           return 0;
          }
          throw __ex;
         }
        }
        return 0;
       }
       return 0;
      } else {
       return 0;
      }
     }
    } else {
     return 1;
    }
  }

  I$size$$() {
    var th = this;
    var var0 = null;
    var0 = (th.Ljava$util$Set$$entrySet$$());
    return (var0.I$size$$());
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var0 = (th.Ljava$util$Set$$entrySet$$());
    var1 = (var0.Ljava$util$Iterator$$iterator$$());
    phi2 = (0) | 0;
    L1223729177: while(true) {
     if ((var1.Z$hasNext$$()) == 0) {
      return phi2;
     } else {
      var3 = (var1.Ljava$lang$Object$$next$$());
      var4 = (phi2) | 0;
      phi2 = ((var4 + (var3.I$hashCode$$()))) | 0;
      continue L1223729177;
     }
    }
  }
}

java$util$AbstractMap.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$ = java$util$Map.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$;

class de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder extends java$nio$charset$CharsetEncoder {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder,
        'de.mirkosertic.bytecoder.classlib.BytecoderCharsetEncoder',
         [de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder,java$nio$charset$CharsetEncoder,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$charset$CharsetEncoder.$i;
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$nio$charset$Charset$(arg0) {
    var th = this;
    java$nio$charset$CharsetEncoder.prototype.V$$init$$Ljava$nio$charset$Charset$$F$F.call(th,arg0,1.1,3.0);
    return;
  }
}


class jdk$internal$util$Preconditions$4 extends java$lang$Object {
  nativeObject = null;

  val$f = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$util$Preconditions$4,
        'jdk.internal.util.Preconditions$4',
         [jdk$internal$util$Preconditions$4,java$util$function$BiFunction,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$$Ljava$lang$Object$ = impl;
  }

  V$$init$$Ljava$util$function$Function$(arg0) {
    var th = this;
    var var0 = null;
    var0 = th;
    var0.val$f = arg0;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$Object$$apply$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    var1 = arg1;
    return (jdk$internal$util$Preconditions$4.prototype.Ljava$lang$RuntimeException$$apply$Ljava$lang$String$$Ljava$util$List$.call(th,var0,var1));
  }

  Ljava$lang$RuntimeException$$apply$Ljava$lang$String$$Ljava$util$List$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var0 = (th.val$f);
    jdk$internal$util$Preconditions.$i;
    var1 = (jdk$internal$util$Preconditions.Ljava$lang$String$$outOfBoundsMessage$Ljava$lang$String$$Ljava$util$List$(arg0,arg1));
    return (var0.Ljava$lang$Object$$apply$Ljava$lang$Object$(var1));
  }
}


class java$lang$Thread extends java$lang$Object {
  nativeObject = null;

  static MAIN_THREAD = null;
  threadGroup = null;
  runnable = null;
  name = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Thread,
        'java.lang.Thread',
         [java$lang$Runnable,java$lang$Thread,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$lang$Thread$$currentThread$$() {
    var var0 = null;
    var var1 = null;
    If_3_0: {
     if ((java$lang$Thread.MAIN_THREAD) != null) {
      break If_3_0;
     } else {
      java$lang$ThreadGroup.$i;
      var0 = new java$lang$ThreadGroup();
      de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.$i;
      java$lang$ThreadGroup.prototype.V$$init$$Ljava$lang$ThreadGroup$$Ljava$lang$String$.call(var0,(de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.SYSTEM),bytecoder.stringconstants[67]);
      var1 = new java$lang$Thread();
      java$lang$Thread.prototype.V$$init$$Ljava$lang$ThreadGroup$$Ljava$lang$String$.call(var1,var0,bytecoder.stringconstants[67]);
      java$lang$Thread.MAIN_THREAD = var1;
      break If_3_0;
     }
    }
    return (java$lang$Thread.MAIN_THREAD);
  }

  V$$init$$Ljava$lang$ThreadGroup$$Ljava$lang$String$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.threadGroup = arg0;
    var1 = th;
    var1.runnable = null;
    var2 = th;
    var2.name = arg1;
    return;
  }

  Z$isVirtual$$() {
    return 0;
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.runnable = null;
    var1 = th;
    de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.$i;
    var1.threadGroup = (de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.SYSTEM);
    var2 = th;
    var2.name = bytecoder.stringconstants[99];
    return;
  }
}


class java$util$Collections$EmptyIterator extends java$lang$Object {
  nativeObject = null;

  static EMPTY_ITERATOR = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Collections$EmptyIterator,
        'java.util.Collections$EmptyIterator',
         [java$util$Collections$EmptyIterator,java$util$Iterator,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$util$Collections$EmptyIterator.$i;
    var0 = new java$util$Collections$EmptyIterator();
    java$util$Collections$EmptyIterator.prototype.V$$init$$$.call(var0);
    java$util$Collections$EmptyIterator.EMPTY_ITERATOR = var0;
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$Object$$next$$() {
    var var0 = null;
    var0 = new java$util$NoSuchElementException();
    java$util$NoSuchElementException.prototype.V$$init$$$.call(var0);
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  Z$hasNext$$() {
    return 0;
  }
}


class java$util$concurrent$ConcurrentMap extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$concurrent$ConcurrentMap,
        'java.util.concurrent.ConcurrentMap',
         [java$util$concurrent$ConcurrentMap,java$util$Map,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}

java$util$concurrent$ConcurrentMap.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$ = java$util$Map.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$;

class java$lang$reflect$ParameterizedType extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$reflect$ParameterizedType,
        'java.lang.reflect.ParameterizedType',
         [java$lang$reflect$ParameterizedType,java$lang$reflect$Type,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$io$Closeable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$Closeable,
        'java.io.Closeable',
         [java$io$Closeable,java$lang$AutoCloseable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$io$PrintStream$1 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$PrintStream$1,
        'java.io.PrintStream$1',
         [java$io$PrintStream$1,jdk$internal$access$JavaIOPrintStreamAccess,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$concurrent$ConcurrentHashMap extends java$util$AbstractMap {
  nativeObject = null;

  delegate = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$concurrent$ConcurrentHashMap,
        'java.util.concurrent.ConcurrentHashMap',
         [java$util$concurrent$ConcurrentHashMap,java$util$AbstractMap,java$util$concurrent$ConcurrentMap,java$io$Serializable,java$util$Map,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$util$AbstractMap.prototype.V$$init$$$.call(th);
    var0 = th;
    var1 = new java$util$HashMap();
    java$util$HashMap.prototype.V$$init$$$.call(var1);
    var0.delegate = var1;
    return;
  }

  V$$init$$I(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$util$AbstractMap.prototype.V$$init$$$.call(th);
    var0 = th;
    var1 = new java$util$HashMap();
    java$util$HashMap.prototype.V$$init$$I.call(var1,arg0);
    var0.delegate = var1;
    return;
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1));
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.Ljava$lang$Object$$get$Ljava$lang$Object$(arg0));
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1));
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.Ljava$lang$String$$toString$$());
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.Z$equals$Ljava$lang$Object$(arg0));
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.I$hashCode$$());
  }

  Z$isEmpty$$() {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.Z$isEmpty$$());
  }

  I$size$$() {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.I$size$$());
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.Z$containsKey$Ljava$lang$Object$(arg0));
  }

  Ljava$util$Set$$entrySet$$() {
    var th = this;
    var var0 = null;
    var0 = (th.delegate);
    return (var0.Ljava$util$Set$$entrySet$$());
  }
}


class java$io$InputStream extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$InputStream,
        'java.io.InputStream',
         [java$io$Closeable,java$lang$AutoCloseable,java$io$InputStream,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$AbstractCollection extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$AbstractCollection,
        'java.util.AbstractCollection',
         [java$util$AbstractCollection,java$util$Collection,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var0 = (th.Ljava$util$Iterator$$iterator$$());
    if ((var0.Z$hasNext$$()) != 0) {
     var1 = new java$lang$StringBuilder();
     java$lang$StringBuilder.prototype.V$$init$$$.call(var1);
     var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var1,91));
     L1568791750: while(true) {
      var3 = (var0.Ljava$lang$Object$$next$$());
      If_24_0: {
       if (var3 != th) {
        phi4 = var3;
        break If_24_0;
       } else {
        phi4 = bytecoder.stringconstants[96];
        break If_24_0;
       }
      }
      var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var1,phi4));
      if ((var0.Z$hasNext$$()) != 0) {
       var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var1,44));
       var8 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var7,32));
       // Here was a goto statement
       continue L1568791750;
      } else {
       var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var1,93));
       return (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var6));
      }
     }
    } else {
     return bytecoder.stringconstants[95];
    }
  }

  Z$containsAll$Ljava$util$Collection$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var0 = (arg0.Ljava$util$Iterator$$iterator$$());
    L978203827: while(true) {
     if ((var0.Z$hasNext$$()) == 0) {
      return 1;
     } else {
      var1 = (var0.Ljava$lang$Object$$next$$());
      if ((th.Z$contains$Ljava$lang$Object$(var1)) != 0) {
       // Here was a goto statement
       continue L978203827;
      } else {
       return 0;
      }
     }
    }
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var0 = (th.Ljava$util$Iterator$$iterator$$());
    If_6_0: {
     If_6_1: {
      If_6_2: {
       if (arg0 != null) {
        break If_6_2;
       } else {
        break If_6_1;
       }
      }
      L1034620538: while(true) {
       if ((var0.Z$hasNext$$()) == 0) {
        break If_6_0;
       } else {
        var1 = (var0.Ljava$lang$Object$$next$$());
        if ((arg0.Z$equals$Ljava$lang$Object$(var1)) == 0) {
         continue L1034620538;
        } else {
         return 1;
        }
       }
      }
     }
     L904013466: while(true) {
      if ((var0.Z$hasNext$$()) == 0) {
       break If_6_0;
      } else {
       if ((var0.Ljava$lang$Object$$next$$()) != null) {
        continue L904013466;
       } else {
        return 1;
       }
      }
     }
    }
    return 0;
  }

  Z$isEmpty$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.I$size$$()) != 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }
}


class java$lang$Integer extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Integer,
        'java.lang.Integer',
         [java$lang$Integer,java$lang$Number,java$lang$Comparable,java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    java$lang$Integer.$i;
    java$lang$Integer.TYPE = bytecoder.primitives.int;
    return;
  }

  static Ljava$lang$Integer$$valueOf$I(arg0) {
    var var0 = null;
    java$lang$Integer.$i;
    var0 = new java$lang$Integer();
    java$lang$Integer.prototype.V$$init$$I.call(var0,arg0);
    return var0;
  }

  V$$init$$I(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Number.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.value = arg0;
    return;
  }

  static Ljava$lang$String$$toString$I(arg0) {
    java$lang$Integer.$i;
    return (java$lang$Integer.Ljava$lang$String$$toString$I$I(arg0,10));
  }

  static Ljava$lang$String$$toString$I$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Integer'].Ljava$lang$String$$toString$I$I(arg0, arg1);
  }

  I$intValue$$() {
    var th = this;
    return (th.value);
  }

  static I$numberOfLeadingZeros$I(arg0) {
    var phi0 = 0;
    var phi1 = 0;
    var phi2 = 0;
    var phi3 = 0;
    var phi4 = 0;
    if (arg0 != 0) {
     If_10_0: {
      if ((arg0 >>> 16) != 0) {
       phi0 = (arg0) | 0;
       phi1 = (1) | 0;
       break If_10_0;
      } else {
       phi0 = ((arg0 << 16)) | 0;
       phi1 = (17) | 0;
       break If_10_0;
      }
     }
     If_20_0: {
      if ((phi0 >>> 24) != 0) {
       phi2 = (phi0) | 0;
       break If_20_0;
      } else {
       phi1 = ((phi1 + 8)) | 0;
       phi2 = ((phi0 << 8)) | 0;
       break If_20_0;
      }
     }
     If_32_0: {
      if ((phi2 >>> 28) != 0) {
       phi3 = (phi2) | 0;
       break If_32_0;
      } else {
       phi1 = ((phi1 + 4)) | 0;
       phi3 = ((phi2 << 4)) | 0;
       break If_32_0;
      }
     }
     If_44_0: {
      if ((phi3 >>> 30) != 0) {
       phi4 = (phi3) | 0;
       break If_44_0;
      } else {
       phi1 = ((phi1 + 2)) | 0;
       phi4 = ((phi3 << 2)) | 0;
       break If_44_0;
      }
     }
     return (phi1 - (phi4 >>> 31));
    } else {
     return 32;
    }
  }

  static I$signum$I(arg0) {
    if (arg0 >= 0) {
     if (arg0 <= 0) {
      return 0;
     } else {
      return 1;
     }
    } else {
     return -1;
    }
  }

  static I$numberOfTrailingZeros$I(arg0) {
    var var0 = 0;
    var phi1 = 0;
    var phi2 = 0;
    var var3 = 0;
    var var4 = 0;
    var phi5 = 0;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var phi9 = 0;
    var phi10 = 0;
    var var11 = 0;
    var var12 = 0;
    var phi13 = 0;
    var phi14 = 0;
    if (arg0 != 0) {
     var0 = ((arg0 << 16)) | 0;
     If_12_0: {
      if (var0 == 0) {
       phi1 = (arg0) | 0;
       phi2 = (31) | 0;
       break If_12_0;
      } else {
       phi1 = (var0) | 0;
       phi2 = (15) | 0;
       break If_12_0;
      }
     }
     var3 = ((phi1 << 8)) | 0;
     If_22_0: {
      if (var3 == 0) {
       phi5 = (phi1) | 0;
       phi6 = (phi2) | 0;
       break If_22_0;
      } else {
       var4 = ((phi2 - 8)) | 0;
       phi5 = (var3) | 0;
       phi6 = (var4) | 0;
       break If_22_0;
      }
     }
     var7 = ((phi5 << 4)) | 0;
     If_36_0: {
      if (var7 == 0) {
       phi9 = (phi5) | 0;
       phi10 = (phi6) | 0;
       break If_36_0;
      } else {
       var8 = ((phi6 - 4)) | 0;
       phi9 = (var7) | 0;
       phi10 = (var8) | 0;
       break If_36_0;
      }
     }
     var11 = ((phi9 << 2)) | 0;
     If_50_0: {
      if (var11 == 0) {
       phi13 = (phi9) | 0;
       phi14 = (phi10) | 0;
       break If_50_0;
      } else {
       var12 = ((phi10 - 2)) | 0;
       phi13 = (var11) | 0;
       phi14 = (var12) | 0;
       break If_50_0;
      }
     }
     return (phi14 - ((phi13 << 1) >>> 31));
    } else {
     return 32;
    }
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (java$lang$Integer.prototype.I$compareTo$Ljava$lang$Integer$.call(th,var0));
  }

  I$compareTo$Ljava$lang$Integer$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var0 = ((th.value)) | 0;
    var1 = ((java$lang$Integer.prototype.I$intValue$$.call(arg0))) | 0;
    java$lang$Integer.$i;
    return (java$lang$Integer.I$compare$I$I(var0,var1));
  }

  static I$compare$I$I(arg0,arg1) {
    var phi0 = 0;
    If_3_0: {
     if (arg0 >= arg1) {
      if (arg0 != arg1) {
       phi0 = (1) | 0;
       break If_3_0;
      } else {
       phi0 = (0) | 0;
       break If_3_0;
      }
     } else {
      phi0 = (-1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = 0;
    var0 = ((th.value)) | 0;
    java$lang$Integer.$i;
    return (java$lang$Integer.Ljava$lang$String$$toString$I$I(var0,10));
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var phi2 = 0;
    if (th != arg0) {
     If_7_0: {
      if (arg0 == null) {
       break If_7_0;
      } else {
       if (((th).constructor.$rt) == ((arg0).constructor.$rt)) {
        var0 = arg0;
        var1 = ((th.value)) | 0;
        If_23_0: {
         if (var1 != (java$lang$Integer.prototype.I$intValue$$.call(var0))) {
          phi2 = (0) | 0;
          break If_23_0;
         } else {
          phi2 = (1) | 0;
          break If_23_0;
         }
        }
        return phi2;
       } else {
        break If_7_0;
       }
      }
     }
     return 0;
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    return (th.value);
  }
}


class java$nio$charset$CoderMalfunctionError extends java$lang$Error {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$charset$CoderMalfunctionError,
        'java.nio.charset.CoderMalfunctionError',
         [java$nio$charset$CoderMalfunctionError,java$lang$Throwable,java$lang$Error,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Exception$(arg0) {
    var th = this;
    java$lang$Error.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$util$ArrayList$ListItr extends java$util$ArrayList$Itr {
  nativeObject = null;

  this$0 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ArrayList$ListItr,
        'java.util.ArrayList$ListItr',
         [java$util$ArrayList$Itr,java$util$ArrayList$ListItr,java$util$Iterator,java$util$ListIterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$ArrayList$$I(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var0 = th;
    var0.this$0 = arg0;
    java$util$ArrayList$Itr.prototype.V$$init$$Ljava$util$ArrayList$.call(th,arg0);
    var1 = th;
    var1.cursor = arg1;
    return;
  }

  V$set$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    if ((th.lastRet) >= 0) {
     th.V$checkForComodification$$();
     TryCatch_14_0: {
      try {
       var2 = (th.this$0);
       var3 = ((th.lastRet)) | 0;
       var4 = (java$util$ArrayList.prototype.Ljava$lang$Object$$set$I$Ljava$lang$Object$.call(var2,var3,arg0));
       break TryCatch_14_0;
      } catch (__ex) {
       if (__ex instanceof java$lang$IndexOutOfBoundsException) {
        var1 = new java$util$ConcurrentModificationException();
        java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var1);
        throw bytecoder.registerStack(var1, new Error().stack);
       }
       throw __ex;
      }
     }
     return;
    } else {
     var0 = new java$lang$IllegalStateException();
     java$lang$IllegalStateException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  I$previousIndex$$() {
    var th = this;
    return ((th.cursor) - 1);
  }
}


class java$nio$HeapByteBuffer extends java$nio$ByteBuffer {
  nativeObject = null;

  static ARRAY_BASE_OFFSET = 0;
  static ARRAY_INDEX_SCALE = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$HeapByteBuffer,
        'java.nio.HeapByteBuffer',
         [java$nio$ByteBuffer,java$nio$HeapByteBuffer,java$lang$Comparable,java$nio$Buffer,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$ByteBuffer.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    java$nio$HeapByteBuffer.$i;
    var0 = (java$nio$HeapByteBuffer.UNSAFE);
    java$nio$HeapByteBuffer.ARRAY_BASE_OFFSET = ((jdk$internal$misc$Unsafe.prototype.I$arrayBaseOffset$Ljava$lang$Class$.call(var0,de$mirkosertic$bytecoder$classlib$Array.$rt)) | 0);
    var1 = (java$nio$HeapByteBuffer.UNSAFE);
    java$nio$HeapByteBuffer.ARRAY_INDEX_SCALE = ((jdk$internal$misc$Unsafe.prototype.I$arrayIndexScale$Ljava$lang$Class$.call(var1,de$mirkosertic$bytecoder$classlib$Array.$rt)) | 0);
    return;
  }

  V$$init$$$B$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3) {
    var th = this;
    var var0 = null;
    java$nio$ByteBuffer.prototype.V$$init$$I$I$I$I$$B$I$Ljava$lang$foreign$MemorySegment$.call(th,-1,arg1,(arg1 + arg2),arg0.data.length,arg0,0,arg3);
    var0 = th;
    java$nio$HeapByteBuffer.$i;
    var0.address = (java$nio$HeapByteBuffer.ARRAY_BASE_OFFSET);
    return;
  }

  V$$init$$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    java$nio$ByteBuffer.prototype.V$$init$$I$I$I$I$$B$I$Ljava$lang$foreign$MemorySegment$.call(th,-1,0,arg1,arg0,bytecoder.newarray((arg0),0),0,arg2);
    var0 = th;
    java$nio$HeapByteBuffer.$i;
    var0.address = (java$nio$HeapByteBuffer.ARRAY_BASE_OFFSET);
    return;
  }

  Z$isReadOnly$$() {
    return 0;
  }

  B$get$I(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var0 = (th.hb);
    var1 = ((th.I$checkIndex$I(arg0))) | 0;
    return (var0.data[(java$nio$HeapByteBuffer.prototype.I$ix$I.call(th,var1))]);
  }

  I$ix$I(arg0) {
    var th = this;
    return (arg0 + (th.offset));
  }

  Ljava$nio$ByteBuffer$$get$$B$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    th.V$checkSession$$();
    var0 = (arg0.data.length) | 0;
    var1 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,arg2,var0))) | 0;
    var2 = ((th.I$position$$())) | 0;
    var3 = ((th.I$limit$$())) | 0;
    if (arg2 <= (var3 - var2)) {
     var5 = (th.hb);
     java$lang$System.V$arraycopy$$B$I$$B$I$I(var5,(java$nio$HeapByteBuffer.prototype.I$ix$I.call(th,var2)),arg0,arg1,arg2);
     var6 = ((var2 + arg2)) | 0;
     var7 = (th.Ljava$nio$ByteBuffer$$position$I(var6));
     return th;
    } else {
     var4 = new java$nio$BufferUnderflowException();
     java$nio$BufferUnderflowException.prototype.V$$init$$$.call(var4);
     throw bytecoder.registerStack(var4, new Error().stack);
    }
  }
}


class java$util$ImmutableCollections$AbstractImmutableMap extends java$util$AbstractMap {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$AbstractImmutableMap,
        'java.util.ImmutableCollections$AbstractImmutableMap',
         [java$util$AbstractMap,java$io$Serializable,java$util$Map,java$util$ImmutableCollections$AbstractImmutableMap,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$util$AbstractMap.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    java$util$ImmutableCollections.$i;
    throw bytecoder.registerStack((java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$()), new Error().stack);
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    java$util$ImmutableCollections.$i;
    throw bytecoder.registerStack((java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$()), new Error().stack);
  }
}


class java$lang$Byte extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Byte,
        'java.lang.Byte',
         [java$lang$Byte,java$lang$Number,java$lang$Comparable,java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    java$lang$Byte.$i;
    java$lang$Byte.TYPE = bytecoder.primitives.byte;
    return;
  }

  static Ljava$lang$Byte$$valueOf$B(arg0) {
    var var0 = null;
    java$lang$Byte.$i;
    var0 = new java$lang$Byte();
    java$lang$Byte.prototype.V$$init$$B.call(var0,arg0);
    return var0;
  }

  V$$init$$B(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Number.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.value = arg0;
    return;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (java$lang$Byte.prototype.I$compareTo$Ljava$lang$Byte$.call(th,var0));
  }

  I$compareTo$Ljava$lang$Byte$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var0 = (th.value);
    var1 = (arg0.B$byteValue$$());
    java$lang$Byte.$i;
    return (java$lang$Byte.I$compare$B$B(var0,var1));
  }

  static I$compare$B$B(arg0,arg1) {
    var phi0 = 0;
    If_3_0: {
     if (arg0 >= arg1) {
      if (arg0 != arg1) {
       phi0 = (1) | 0;
       break If_3_0;
      } else {
       phi0 = (0) | 0;
       break If_3_0;
      }
     } else {
      phi0 = (-1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  I$intValue$$() {
    var th = this;
    return (th.value);
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = 0;
    var0 = (th.value);
    java$lang$Byte.$i;
    return (java$lang$Byte.Ljava$lang$String$$toString$B$I(var0,10));
  }

  static Ljava$lang$String$$toString$B$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Byte'].Ljava$lang$String$$toString$B$I(arg0, arg1);
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var phi2 = 0;
    if (th != arg0) {
     If_7_0: {
      if (arg0 == null) {
       break If_7_0;
      } else {
       if (((th).constructor.$rt) == ((arg0).constructor.$rt)) {
        var0 = arg0;
        var1 = (th.value);
        If_23_0: {
         if (var1 != (var0.B$byteValue$$())) {
          phi2 = (0) | 0;
          break If_23_0;
         } else {
          phi2 = (1) | 0;
          break If_23_0;
         }
        }
        return phi2;
       } else {
        break If_7_0;
       }
      }
     }
     return 0;
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    return (th.value);
  }
}


class java$util$HashMap extends java$util$AbstractMap {
  nativeObject = null;

  loadFactor = 0.0;
  threshold = 0;
  size = 0;
  table = null;
  modCount = 0;
  entrySet = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$HashMap,
        'java.util.HashMap',
         [java$util$AbstractMap,java$util$HashMap,java$io$Serializable,java$util$Map,java$lang$Cloneable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    java$util$AbstractMap.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.loadFactor = 0.75;
    return;
  }

  V$$init$$I(arg0) {
    var th = this;
    java$util$HashMap.prototype.V$$init$$I$F.call(th,arg0,0.75);
    return;
  }

  V$$init$$I$F(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var phi4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    java$util$AbstractMap.prototype.V$$init$$$.call(th);
    if (arg0 >= 0) {
     If_28_0: {
      if (arg0 <= 1073741824) {
       phi4 = (arg0) | 0;
       break If_28_0;
      } else {
       phi4 = (1073741824) | 0;
       break If_28_0;
      }
     }
     If_34_0: {
      if (arg1 <= 0.0) {
       break If_34_0;
      } else {
       java$lang$Float.$i;
       if ((java$lang$Float.Z$isNaN$F(arg1)) == 0) {
        var9 = th;
        var9.loadFactor = arg1;
        var10 = th;
        var11 = (phi4) | 0;
        var10.threshold = (java$util$HashMap.I$tableSizeFor$I(var11));
        return;
       } else {
        break If_34_0;
       }
      }
     }
     var5 = new java$lang$IllegalArgumentException();
     var6 = new java$lang$StringBuilder();
     java$lang$StringBuilder.prototype.V$$init$$$.call(var6);
     var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var6,bytecoder.stringconstants[58]));
     var8 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$F.call(var7,arg1));
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var5,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var8)));
     throw bytecoder.registerStack(var5, new Error().stack);
    } else {
     var0 = new java$lang$IllegalArgumentException();
     var1 = new java$lang$StringBuilder();
     java$lang$StringBuilder.prototype.V$$init$$$.call(var1);
     var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var1,bytecoder.stringconstants[57]));
     var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var2,arg0));
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var3)));
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  static I$tableSizeFor$I(arg0) {
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var0 = ((arg0 - 1)) | 0;
    java$lang$Integer.$i;
    var1 = ((-1 >>> (java$lang$Integer.I$numberOfLeadingZeros$I(var0)))) | 0;
    If_13_0: {
     if (var1 >= 0) {
      if (var1 < 1073741824) {
       phi2 = ((var1 + 1)) | 0;
       break If_13_0;
      } else {
       phi2 = (1073741824) | 0;
       break If_13_0;
      }
     } else {
      phi2 = (1) | 0;
      break If_13_0;
     }
    }
    return phi2;
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var phi4 = 0;
    var var5 = null;
    var var6 = 0;
    var phi7 = null;
    var phi8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var phi14 = null;
    var phi15 = null;
    var var16 = null;
    var var17 = 0;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var phi27 = null;
    var var28 = null;
    var var29 = null;
    var var30 = null;
    if (arg1 != null) {
     var1 = ((java$util$HashMap.I$hash$Ljava$lang$Object$(arg0))) | 0;
     If_21_0: {
      If_21_1: {
       if ((th.size) > (th.threshold)) {
        phi4 = (0) | 0;
        break If_21_1;
       } else {
        var2 = (th.table);
        if (var2 == null) {
         phi4 = (0) | 0;
         break If_21_1;
        } else {
         var3 = (var2.data.length) | 0;
         if (var3 != 0) {
          phi7 = var2;
          phi8 = (var3) | 0;
          phi4 = (0) | 0;
          break If_21_0;
         } else {
          phi4 = (0) | 0;
          break If_21_1;
         }
        }
       }
      }
      var5 = (java$util$HashMap.prototype.$Ljava$util$HashMap$Node$$resize$$.call(th));
      var6 = (var5.data.length) | 0;
      phi7 = var5;
      phi8 = (var6) | 0;
      break If_21_0;
     }
     var9 = phi7;
     var10 = (((phi8 - 1) & var1)) | 0;
     var11 = (var9.data[var10]);
     If_55_0: {
      if (var11 == null) {
       phi14 = null;
       phi15 = null;
       break If_55_0;
      } else {
       If_59_0: {
        if (bytecoder.instanceOf(var11,java$util$HashMap$TreeNode) == 0) {
         phi27 = var11;
         L1515297216: while(true) {
          If_142_0: {
           if ((phi27.hash) != var1) {
            break If_142_0;
           } else {
            var28 = (phi27.key);
            If_147_0: {
             if (var28 == arg0) {
              break If_147_0;
             } else {
              if (arg0 == null) {
               break If_142_0;
              } else {
               if ((arg0.Z$equals$Ljava$lang$Object$(var28)) == 0) {
                break If_142_0;
               } else {
                break If_147_0;
               }
              }
             }
            }
            var29 = phi27;
            phi14 = null;
            phi15 = var29;
            break If_59_0;
           }
          }
          phi4 = ((phi4 + 1)) | 0;
          var30 = (phi27.next);
          if (var30 != null) {
           phi27 = var30;
           continue L1515297216;
          } else {
           phi14 = null;
           phi15 = null;
           break If_59_0;
          }
         }
        } else {
         var12 = var11;
         var13 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$getTreeNode$I$Ljava$lang$Object$.call(var12,var1,arg0));
         phi14 = var12;
         phi15 = var13;
         break If_59_0;
        }
       }
       if (phi15 == null) {
        break If_55_0;
       } else {
        var16 = (phi15.value);
        if (var16 == null) {
         break If_55_0;
        } else {
         java$util$HashMap.prototype.V$afterNodeAccess$Ljava$util$HashMap$Node$.call(th,phi15);
         return var16;
        }
       }
      }
     }
     var17 = ((th.modCount)) | 0;
     var18 = (arg1.Ljava$lang$Object$$apply$Ljava$lang$Object$(arg0));
     if (var17 == (th.modCount)) {
      if (var18 != null) {
       if (phi15 == null) {
        If_107_0: {
         if (phi14 == null) {
          var26 = phi7;
          var26.data[var10] = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$newNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(th,var1,arg0,var18,var11));
          if (phi4 < 7) {
           break If_107_0;
          } else {
           java$util$HashMap.prototype.V$treeifyBin$$Ljava$util$HashMap$Node$$I.call(th,phi7,var1);
           break If_107_0;
          }
         } else {
          var21 = phi14;
          var22 = phi7;
          var23 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$putTreeVal$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$Ljava$lang$Object$$Ljava$lang$Object$.call(var21,th,var22,var1,arg0,var18));
          break If_107_0;
         }
        }
        var24 = th;
        var24.modCount = (var17 + 1);
        var25 = th;
        var25.size = ((var25.size) + 1);
        java$util$HashMap.prototype.V$afterNodeInsertion$Z.call(th,1);
        return var18;
       } else {
        var20 = phi15;
        var20.value = var18;
        java$util$HashMap.prototype.V$afterNodeAccess$Ljava$util$HashMap$Node$.call(th,phi15);
        return var18;
       }
      } else {
       return null;
      }
     } else {
      var19 = new java$util$ConcurrentModificationException();
      java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var19);
      throw bytecoder.registerStack(var19, new Error().stack);
     }
    } else {
     var0 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  static I$hash$Ljava$lang$Object$(arg0) {
    var phi0 = 0;
    var var1 = 0;
    If_2_0: {
     if (arg0 != null) {
      var1 = ((arg0.I$hashCode$$())) | 0;
      phi0 = ((var1 ^ (var1 >>> 16))) | 0;
      break If_2_0;
     } else {
      phi0 = (0) | 0;
      break If_2_0;
     }
    }
    return phi0;
  }

  $Ljava$util$HashMap$Node$$resize$$() {
    var th = this;
    var var0 = null;
    var phi1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var phi7 = 0;
    var phi8 = 0;
    var var9 = .0;
    var phi10 = 0;
    var phi11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var phi15 = 0;
    var var16 = null;
    var var17 = 0;
    var phi18 = null;
    var phi19 = null;
    var phi20 = null;
    var phi21 = null;
    var phi22 = null;
    var phi23 = null;
    var var24 = null;
    var phi25 = null;
    var phi26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var phi30 = null;
    var var31 = null;
    var var32 = null;
    var0 = (th.table);
    If_5_0: {
     if (var0 != null) {
      phi1 = (var0.data.length) | 0;
      break If_5_0;
     } else {
      phi1 = (0) | 0;
      break If_5_0;
     }
    }
    var2 = (phi1) | 0;
    var3 = ((th.threshold)) | 0;
    If_16_0: {
     if (var2 <= 0) {
      if (var3 <= 0) {
       phi7 = (16) | 0;
       phi8 = (12) | 0;
       break If_16_0;
      } else {
       phi7 = (var3) | 0;
       phi8 = (0) | 0;
       break If_16_0;
      }
     } else {
      if (var2 < 1073741824) {
       var5 = ((var2 << 1)) | 0;
       if (var5 >= 1073741824) {
        phi7 = (var5) | 0;
        phi8 = (0) | 0;
        break If_16_0;
       } else {
        if (var2 < 16) {
         phi7 = (var5) | 0;
         phi8 = (0) | 0;
         break If_16_0;
        } else {
         var6 = ((var3 << 1)) | 0;
         phi7 = (var5) | 0;
         phi8 = (var6) | 0;
         break If_16_0;
        }
       }
      } else {
       var4 = th;
       var4.threshold = 2147483647;
       return var0;
      }
     }
    }
    If_44_0: {
     if (phi8 != 0) {
      phi11 = (phi8) | 0;
      break If_44_0;
     } else {
      var9 = (phi7 * (th.loadFactor));
      If_53_0: {
       If_53_1: {
        if (phi7 >= 1073741824) {
         break If_53_1;
        } else {
         if (var9 >= 1.07374182E9) {
          break If_53_1;
         } else {
          phi10 = ((var9 | 0)) | 0;
          break If_53_0;
         }
        }
       }
       phi10 = (2147483647) | 0;
       break If_53_0;
      }
      phi11 = (phi10) | 0;
      break If_44_0;
     }
    }
    var12 = th;
    var12.threshold = phi11;
    var13 = bytecoder.newarray((phi7),null);
    var14 = th;
    var14.table = var13;
    If_71_0: {
     if (var0 == null) {
      break If_71_0;
     } else {
      phi15 = (0) | 0;
      L13954618: while(true) {
       if (phi15 >= var2) {
        break If_71_0;
       } else {
        var16 = (var0.data[phi15]);
        If_81_0: {
         if (var16 == null) {
          phi18 = var16;
          break If_81_0;
         } else {
          var0.data[phi15] = null;
          if ((var16.next) != null) {
           if (bytecoder.instanceOf(var16,java$util$HashMap$TreeNode) == 0) {
            phi19 = var16;
            phi20 = null;
            phi21 = null;
            phi22 = null;
            phi23 = null;
            L426449440: while(true) {
             var24 = (phi19.next);
             If_123_0: {
              if (((phi19.hash) & var2) != 0) {
               If_153_0: {
                if (phi23 != null) {
                 var32 = phi23;
                 var32.next = phi19;
                 phi30 = phi22;
                 break If_153_0;
                } else {
                 phi30 = phi19;
                 break If_153_0;
                }
               }
               var31 = phi19;
               phi25 = phi20;
               phi26 = phi21;
               phi22 = phi30;
               phi23 = var31;
               break If_123_0;
              } else {
               If_126_0: {
                if (phi21 != null) {
                 var29 = phi21;
                 var29.next = phi19;
                 phi25 = phi20;
                 break If_126_0;
                } else {
                 phi25 = phi19;
                 break If_126_0;
                }
               }
               phi26 = phi19;
               break If_123_0;
              }
             }
             if (var24 != null) {
              phi19 = var24;
              phi20 = phi25;
              phi21 = phi26;
              continue L426449440;
             } else {
              If_134_0: {
               if (phi26 == null) {
                break If_134_0;
               } else {
                var27 = phi26;
                var27.next = null;
                var13.data[phi15] = phi25;
                break If_134_0;
               }
              }
              if (phi23 == null) {
               phi18 = var24;
               break If_81_0;
              } else {
               var28 = phi23;
               var28.next = null;
               var13.data[(phi15 + var2)] = phi22;
               phi18 = var24;
               break If_81_0;
              }
             }
            }
           } else {
            java$util$HashMap$TreeNode.prototype.V$split$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$I.call(var16,th,var13,phi15,var2);
            phi18 = var16;
            break If_81_0;
           }
          } else {
           var17 = (((var16.hash) & (phi7 - 1))) | 0;
           var13.data[var17] = var16;
           phi18 = var16;
           break If_81_0;
          }
         }
        }
        phi15 = ((phi15 + 1)) | 0;
        // Here was a goto statement
        continue L13954618;
       }
      }
     }
    }
    return var13;
  }

  Ljava$util$HashMap$Node$$replacementNode$Ljava$util$HashMap$Node$$Ljava$util$HashMap$Node$(arg0,arg1) {
    var var0 = null;
    var0 = new java$util$HashMap$Node();
    java$util$HashMap$Node.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var0,(arg0.hash),(arg0.key),(arg0.value),arg1);
    return var0;
  }

  static Ljava$lang$Class$$comparableClassFor$Ljava$lang$Object$(arg0) {
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var phi3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    If_4_0: {
     if (bytecoder.instanceOf(arg0,java$lang$Comparable) == 0) {
      break If_4_0;
     } else {
      var0 = ((arg0).constructor.$rt);
      if (var0 != java$lang$String.$rt) {
       var1 = (java$lang$Class.prototype.$Ljava$lang$reflect$Type$$getGenericInterfaces$$.call(var0));
       if (var1 == null) {
        break If_4_0;
       } else {
        var2 = (var1.data.length) | 0;
        phi3 = (0) | 0;
        L709630685: while(true) {
         if (phi3 >= var2) {
          break If_4_0;
         } else {
          var4 = (var1.data[phi3]);
          If_33_0: {
           if (bytecoder.instanceOf(var4,java$lang$reflect$ParameterizedType) == 0) {
            break If_33_0;
           } else {
            var5 = var4;
            if ((var5.Ljava$lang$reflect$Type$$getRawType$$()) != java$lang$Comparable.$rt) {
             break If_33_0;
            } else {
             var6 = (var5.$Ljava$lang$reflect$Type$$getActualTypeArguments$$());
             if (var6 == null) {
              break If_33_0;
             } else {
              if (var6.data.length != 1) {
               break If_33_0;
              } else {
               if ((var6.data[0]) != var0) {
                break If_33_0;
               } else {
                return var0;
               }
              }
             }
            }
           }
          }
          phi3 = ((phi3 + 1)) | 0;
          // Here was a goto statement
          continue L709630685;
         }
        }
       }
      } else {
       return var0;
      }
     }
    }
    return null;
  }

  static I$compareComparables$Ljava$lang$Class$$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1,arg2) {
    var phi0 = 0;
    var var1 = null;
    If_4_0: {
     If_4_1: {
      if (arg2 == null) {
       break If_4_1;
      } else {
       if (((arg2).constructor.$rt) == arg0) {
        var1 = arg1;
        phi0 = ((var1.I$compareTo$Ljava$lang$Object$(arg2))) | 0;
        break If_4_0;
       } else {
        break If_4_1;
       }
      }
     }
     phi0 = (0) | 0;
     break If_4_0;
    }
    return phi0;
  }

  V$afterNodeAccess$Ljava$util$HashMap$Node$(arg0) {
    return;
  }

  Ljava$util$HashMap$TreeNode$$newTreeNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    var var0 = null;
    java$util$HashMap$TreeNode.$i;
    var0 = new java$util$HashMap$TreeNode();
    java$util$HashMap$TreeNode.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var0,arg0,arg1,arg2,arg3);
    return var0;
  }

  V$afterNodeInsertion$Z(arg0) {
    return;
  }

  Ljava$util$HashMap$Node$$newNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    var var0 = null;
    var0 = new java$util$HashMap$Node();
    java$util$HashMap$Node.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var0,arg0,arg1,arg2,arg3);
    return var0;
  }

  V$treeifyBin$$Ljava$util$HashMap$Node$$I(arg0,arg1) {
    var th = this;
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = null;
    var phi9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    If_4_0: {
     If_4_1: {
      if (arg0 == null) {
       break If_4_1;
      } else {
       var0 = (arg0.data.length) | 0;
       if (var0 >= 64) {
        var2 = (((var0 - 1) & arg1)) | 0;
        var3 = (arg0.data[var2]);
        if (var3 == null) {
         break If_4_0;
        } else {
         phi4 = var3;
         phi5 = null;
         phi6 = null;
         L1485518446: while(true) {
          var7 = phi4;
          var8 = (java$util$HashMap.prototype.Ljava$util$HashMap$TreeNode$$replacementTreeNode$Ljava$util$HashMap$Node$$Ljava$util$HashMap$Node$.call(th,var7,null));
          If_40_0: {
           if (phi6 != null) {
            var8.prev = phi6;
            var12 = phi6;
            var12.next = var8;
            phi9 = phi5;
            break If_40_0;
           } else {
            phi9 = var8;
            break If_40_0;
           }
          }
          var10 = (phi4.next);
          if (var10 != null) {
           phi4 = var10;
           phi5 = phi9;
           phi6 = var8;
           continue L1485518446;
          } else {
           var11 = phi9;
           arg0.data[var2] = var11;
           if (var11 == null) {
            break If_4_0;
           } else {
            java$util$HashMap$TreeNode.prototype.V$treeify$$Ljava$util$HashMap$Node$.call(phi9,arg0);
            break If_4_0;
           }
          }
         }
        }
       } else {
        break If_4_1;
       }
      }
     }
     var1 = (java$util$HashMap.prototype.$Ljava$util$HashMap$Node$$resize$$.call(th));
     break If_4_0;
    }
    return;
  }

  Ljava$util$HashMap$TreeNode$$replacementTreeNode$Ljava$util$HashMap$Node$$Ljava$util$HashMap$Node$(arg0,arg1) {
    var var0 = null;
    java$util$HashMap$TreeNode.$i;
    var0 = new java$util$HashMap$TreeNode();
    java$util$HashMap$TreeNode.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var0,(arg0.hash),(arg0.key),(arg0.value),arg1);
    return var0;
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var phi1 = null;
    var0 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$getNode$Ljava$lang$Object$.call(th,arg0));
    If_6_0: {
     if (var0 != null) {
      phi1 = (var0.value);
      break If_6_0;
     } else {
      phi1 = null;
      break If_6_0;
     }
    }
    return phi1;
  }

  Ljava$util$HashMap$Node$$getNode$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var phi7 = null;
    var var8 = null;
    var var9 = null;
    var phi10 = null;
    var var11 = null;
    var phi12 = null;
    var var13 = null;
    var phi14 = null;
    var0 = (th.table);
    If_6_0: {
     if (var0 == null) {
      break If_6_0;
     } else {
      var1 = (var0.data.length) | 0;
      if (var1 <= 0) {
       break If_6_0;
      } else {
       var2 = ((var1 - 1)) | 0;
       var3 = ((java$util$HashMap.I$hash$Ljava$lang$Object$(arg0))) | 0;
       var4 = (var0.data[(var2 & var3)]);
       if (var4 == null) {
        break If_6_0;
       } else {
        var5 = ((var4.hash)) | 0;
        If_31_0: {
         if (var5 != var3) {
          break If_31_0;
         } else {
          var6 = (var4.key);
          If_36_0: {
           if (var6 == arg0) {
            break If_36_0;
           } else {
            if (arg0 == null) {
             phi7 = var6;
             break If_31_0;
            } else {
             if ((arg0.Z$equals$Ljava$lang$Object$(var6)) == 0) {
              phi7 = var6;
              break If_31_0;
             } else {
              break If_36_0;
             }
            }
           }
          }
          return var4;
         }
        }
        var8 = (var4.next);
        if (var8 == null) {
         phi14 = var8;
         phi12 = phi7;
         break If_6_0;
        } else {
         if (bytecoder.instanceOf(var4,java$util$HashMap$TreeNode) == 0) {
          phi10 = var8;
          L392682917: while(true) {
           If_66_0: {
            if ((phi10.hash) != var3) {
             phi12 = phi7;
             break If_66_0;
            } else {
             var11 = (phi10.key);
             If_71_0: {
              if (var11 == arg0) {
               break If_71_0;
              } else {
               if (arg0 == null) {
                phi12 = var11;
                break If_66_0;
               } else {
                if ((arg0.Z$equals$Ljava$lang$Object$(var11)) == 0) {
                 phi12 = var11;
                 break If_66_0;
                } else {
                 break If_71_0;
                }
               }
              }
             }
             return phi10;
            }
           }
           var13 = (phi10.next);
           if (var13 != null) {
            phi10 = var13;
            phi7 = phi12;
            continue L392682917;
           } else {
            phi14 = var13;
            break If_6_0;
           }
          }
         } else {
          var9 = var4;
          return (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$getTreeNode$I$Ljava$lang$Object$.call(var9,var3,arg0));
         }
        }
       }
      }
     }
    }
    return null;
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var var0 = 0;
    var0 = ((java$util$HashMap.I$hash$Ljava$lang$Object$(arg0))) | 0;
    return (java$util$HashMap.prototype.Ljava$lang$Object$$putVal$I$Ljava$lang$Object$$Ljava$lang$Object$$Z$Z.call(th,var0,arg0,arg1,0,1));
  }

  Ljava$lang$Object$$putVal$I$Ljava$lang$Object$$Ljava$lang$Object$$Z$Z(arg0,arg1,arg2,arg3,arg4) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var phi4 = null;
    var phi5 = 0;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var phi10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = 0;
    var var14 = null;
    var var15 = null;
    var phi16 = null;
    var phi17 = null;
    var phi18 = null;
    var var19 = null;
    var var20 = null;
    var phi21 = null;
    var phi22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var phi26 = 0;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var phi30 = null;
    var0 = (th.table);
    If_10_0: {
     If_10_1: {
      if (var0 == null) {
       break If_10_1;
      } else {
       var1 = (var0.data.length) | 0;
       if (var1 != 0) {
        phi4 = var0;
        phi5 = (var1) | 0;
        break If_10_0;
       } else {
        break If_10_1;
       }
      }
     }
     var2 = (java$util$HashMap.prototype.$Ljava$util$HashMap$Node$$resize$$.call(th));
     var3 = (var2.data.length) | 0;
     phi4 = var2;
     phi5 = (var3) | 0;
     break If_10_0;
    }
    var6 = phi4;
    var7 = (((phi5 - 1) & arg0)) | 0;
    var8 = (var6.data[var7]);
    If_38_0: {
     if (var8 != null) {
      If_72_0: {
       If_72_1: {
        if ((var8.hash) != arg0) {
         phi21 = var8;
         break If_72_1;
        } else {
         var15 = (var8.key);
         If_77_0: {
          if (var15 == arg1) {
           phi16 = var8;
           phi17 = var15;
           break If_77_0;
          } else {
           if (arg1 == null) {
            phi21 = var8;
            phi22 = var15;
            break If_72_1;
           } else {
            if ((arg1.Z$equals$Ljava$lang$Object$(var15)) == 0) {
             phi21 = var8;
             phi22 = var15;
             break If_72_1;
            } else {
             phi16 = var8;
             phi17 = var15;
             break If_77_0;
            }
           }
          }
         }
         phi18 = phi16;
         break If_72_0;
        }
       }
       if (bytecoder.instanceOf(phi21,java$util$HashMap$TreeNode) == 0) {
        phi26 = (0) | 0;
        L1674031291: while(true) {
         var27 = (phi21.next);
         if (var27 != null) {
          If_141_0: {
           if ((var27.hash) != arg0) {
            phi30 = phi22;
            break If_141_0;
           } else {
            var29 = (var27.key);
            if (var29 == arg1) {
             phi16 = phi21;
             phi18 = var27;
             phi17 = var29;
             break If_72_0;
            } else {
             if (arg1 == null) {
              phi30 = var29;
              break If_141_0;
             } else {
              if ((arg1.Z$equals$Ljava$lang$Object$(var29)) == 0) {
               phi30 = var29;
               break If_141_0;
              } else {
               phi16 = phi21;
               phi18 = var27;
               phi17 = var29;
               break If_72_0;
              }
             }
            }
           }
          }
          phi26 = ((phi26 + 1)) | 0;
          phi21 = var27;
          phi22 = phi30;
          continue L1674031291;
         } else {
          var28 = phi21;
          var28.next = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$newNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(th,arg0,arg1,arg2,null));
          if (phi26 < 7) {
           phi16 = phi21;
           phi18 = var27;
           phi17 = phi22;
           break If_72_0;
          } else {
           java$util$HashMap.prototype.V$treeifyBin$$Ljava$util$HashMap$Node$$I.call(th,phi4,arg0);
           phi16 = phi21;
           phi18 = var27;
           phi17 = phi22;
           break If_72_0;
          }
         }
        }
       } else {
        var23 = phi21;
        var24 = phi4;
        var25 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$putTreeVal$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$Ljava$lang$Object$$Ljava$lang$Object$.call(var23,th,var24,arg0,arg1,arg2));
        phi16 = phi21;
        phi18 = var25;
        phi17 = phi22;
        break If_72_0;
       }
      }
      if (phi18 == null) {
       phi10 = phi16;
       break If_38_0;
      } else {
       var19 = (phi18.value);
       If_95_0: {
        If_95_1: {
         if (arg3 == 0) {
          break If_95_1;
         } else {
          if (var19 != null) {
           break If_95_0;
          } else {
           break If_95_1;
          }
         }
        }
        var20 = phi18;
        var20.value = arg2;
        break If_95_0;
       }
       java$util$HashMap.prototype.V$afterNodeAccess$Ljava$util$HashMap$Node$.call(th,phi18);
       return var19;
      }
     } else {
      var9 = phi4;
      var9.data[var7] = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$newNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(th,arg0,arg1,arg2,null));
      phi10 = var8;
      break If_38_0;
     }
    }
    var11 = th;
    var11.modCount = ((var11.modCount) + 1);
    var12 = th;
    var13 = (((var12.size) + 1)) | 0;
    var12.size = var13;
    If_62_0: {
     if (var13 <= (th.threshold)) {
      break If_62_0;
     } else {
      var14 = (java$util$HashMap.prototype.$Ljava$util$HashMap$Node$$resize$$.call(th));
      break If_62_0;
     }
    }
    java$util$HashMap.prototype.V$afterNodeInsertion$Z.call(th,arg4);
    return null;
  }

  Z$isEmpty$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.size) != 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  I$size$$() {
    var th = this;
    return (th.size);
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((java$util$HashMap.prototype.Ljava$util$HashMap$Node$$getNode$Ljava$lang$Object$.call(th,arg0)) == null) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }

  Ljava$util$Set$$entrySet$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var phi3 = null;
    var0 = (th.entrySet);
    If_5_0: {
     if (var0 != null) {
      phi3 = var0;
      break If_5_0;
     } else {
      var1 = th;
      var2 = new java$util$HashMap$EntrySet();
      java$util$HashMap$EntrySet.prototype.V$$init$$Ljava$util$HashMap$.call(var2,th);
      var1.entrySet = var2;
      phi3 = var2;
      break If_5_0;
     }
    }
    return phi3;
  }
}


class java$util$AbstractList$ListItr extends java$util$AbstractList$Itr {
  nativeObject = null;

  this$0 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$AbstractList$ListItr,
        'java.util.AbstractList$ListItr',
         [java$util$AbstractList$Itr,java$util$Iterator,java$util$AbstractList$ListItr,java$util$ListIterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$AbstractList$$I(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var0 = th;
    var0.this$0 = arg0;
    java$util$AbstractList$Itr.prototype.V$$init$$Ljava$util$AbstractList$.call(th,arg0);
    var1 = th;
    var1.cursor = arg1;
    return;
  }

  V$set$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    if ((th.lastRet) >= 0) {
     th.V$checkForComodification$$();
     TryCatch_14_0: {
      try {
       var2 = (th.this$0);
       var3 = ((th.lastRet)) | 0;
       var4 = (var2.Ljava$lang$Object$$set$I$Ljava$lang$Object$(var3,arg0));
       var5 = th;
       var5.expectedModCount = ((th.this$0).modCount);
       break TryCatch_14_0;
      } catch (__ex) {
       if (__ex instanceof java$lang$IndexOutOfBoundsException) {
        var1 = new java$util$ConcurrentModificationException();
        java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var1);
        throw bytecoder.registerStack(var1, new Error().stack);
       }
       throw __ex;
      }
     }
     return;
    } else {
     var0 = new java$lang$IllegalStateException();
     java$lang$IllegalStateException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  I$previousIndex$$() {
    var th = this;
    return ((th.cursor) - 1);
  }
}


class de$mirkosertic$bytecoder$classlib$BytecoderCharset extends java$nio$charset$Charset {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        de$mirkosertic$bytecoder$classlib$BytecoderCharset,
        'de.mirkosertic.bytecoder.classlib.BytecoderCharset',
         [de$mirkosertic$bytecoder$classlib$BytecoderCharset,java$nio$charset$Charset,java$lang$Comparable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$$$Ljava$lang$String$(arg0,arg1) {
    var th = this;
    java$nio$charset$Charset.prototype.V$$init$$Ljava$lang$String$$$Ljava$lang$String$.call(th,arg0,arg1);
    return;
  }

  Ljava$nio$charset$CharsetDecoder$$newDecoder$$() {
    var th = this;
    var var0 = null;
    de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder.$i;
    var0 = new de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder();
    de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder.prototype.V$$init$$Ljava$nio$charset$Charset$.call(var0,th);
    return var0;
  }

  Ljava$nio$charset$CharsetEncoder$$newEncoder$$() {
    var th = this;
    var var0 = null;
    de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder.$i;
    var0 = new de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder();
    de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder.prototype.V$$init$$Ljava$nio$charset$Charset$.call(var0,th);
    return var0;
  }
}


class java$util$LinkedHashMap$Entry extends java$util$HashMap$Node {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$LinkedHashMap$Entry,
        'java.util.LinkedHashMap$Entry',
         [java$util$LinkedHashMap$Entry,java$util$Map$Entry,java$util$HashMap$Node,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    var th = this;
    java$util$HashMap$Node.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(th,arg0,arg1,arg2,arg3);
    return;
  }
}


class java$util$Collections$EmptyListIterator extends java$util$Collections$EmptyIterator {
  nativeObject = null;

  static EMPTY_ITERATOR = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Collections$EmptyListIterator,
        'java.util.Collections$EmptyListIterator',
         [java$util$Collections$EmptyIterator,java$util$Iterator,java$util$Collections$EmptyListIterator,java$util$ListIterator,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$util$Collections$EmptyIterator.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    java$util$Collections$EmptyListIterator.$i;
    var0 = new java$util$Collections$EmptyListIterator();
    java$util$Collections$EmptyListIterator.prototype.V$$init$$$.call(var0);
    java$util$Collections$EmptyListIterator.EMPTY_ITERATOR = var0;
    return;
  }

  V$$init$$$() {
    var th = this;
    java$util$Collections$EmptyIterator.prototype.V$$init$$$.call(th);
    return;
  }

  V$set$Ljava$lang$Object$(arg0) {
    var var0 = null;
    var0 = new java$lang$IllegalStateException();
    java$lang$IllegalStateException.prototype.V$$init$$$.call(var0);
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  I$previousIndex$$() {
    return -1;
  }
}


class java$util$Collections$EmptyMap extends java$util$AbstractMap {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Collections$EmptyMap,
        'java.util.Collections$EmptyMap',
         [java$util$AbstractMap,java$util$Collections$EmptyMap,java$io$Serializable,java$util$Map,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$util$AbstractMap.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    var var0 = null;
    var0 = new java$lang$UnsupportedOperationException();
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var0);
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    return null;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var var0 = null;
    var phi1 = 0;
    If_4_0: {
     If_4_1: {
      if (bytecoder.instanceOf(arg0,java$util$Map) == 0) {
       break If_4_1;
      } else {
       var0 = arg0;
       if ((var0.Z$isEmpty$$()) == 0) {
        break If_4_1;
       } else {
        phi1 = (1) | 0;
        break If_4_0;
       }
      }
     }
     phi1 = (0) | 0;
     break If_4_0;
    }
    return phi1;
  }

  I$hashCode$$() {
    return 0;
  }

  Z$isEmpty$$() {
    return 1;
  }

  I$size$$() {
    return 0;
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    return 0;
  }

  Ljava$util$Set$$entrySet$$() {
    java$util$Collections.$i;
    return (java$util$Collections.Ljava$util$Set$$emptySet$$());
  }
}


class java$nio$HeapCharBuffer extends java$nio$CharBuffer {
  nativeObject = null;

  static ARRAY_BASE_OFFSET = 0;
  static ARRAY_INDEX_SCALE = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$HeapCharBuffer,
        'java.nio.HeapCharBuffer',
         [java$lang$Readable,java$lang$Appendable,java$nio$CharBuffer,java$lang$CharSequence,java$nio$HeapCharBuffer,java$lang$Comparable,java$nio$Buffer,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$CharBuffer.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var var1 = null;
    java$nio$HeapCharBuffer.$i;
    var0 = (java$nio$HeapCharBuffer.UNSAFE);
    java$nio$HeapCharBuffer.ARRAY_BASE_OFFSET = ((jdk$internal$misc$Unsafe.prototype.I$arrayBaseOffset$Ljava$lang$Class$.call(var0,de$mirkosertic$bytecoder$classlib$Array.$rt)) | 0);
    var1 = (java$nio$HeapCharBuffer.UNSAFE);
    java$nio$HeapCharBuffer.ARRAY_INDEX_SCALE = ((jdk$internal$misc$Unsafe.prototype.I$arrayIndexScale$Ljava$lang$Class$.call(var1,de$mirkosertic$bytecoder$classlib$Array.$rt)) | 0);
    return;
  }

  V$$init$$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    java$nio$CharBuffer.prototype.V$$init$$I$I$I$I$$C$I$Ljava$lang$foreign$MemorySegment$.call(th,-1,0,arg1,arg0,bytecoder.newarray((arg0),0),0,arg2);
    var0 = th;
    java$nio$HeapCharBuffer.$i;
    var0.address = (java$nio$HeapCharBuffer.ARRAY_BASE_OFFSET);
    return;
  }

  Z$isReadOnly$$() {
    return 0;
  }

  Ljava$nio$CharBuffer$$put$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var phi5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = null;
    th.V$checkSession$$();
    var0 = ((arg2 - arg1)) | 0;
    var1 = ((java$lang$String.prototype.I$length$$.call(arg0))) | 0;
    var2 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var0,var1))) | 0;
    var3 = ((th.I$position$$())) | 0;
    var4 = ((th.I$limit$$())) | 0;
    If_22_0: {
     if (var3 > var4) {
      phi5 = (0) | 0;
      break If_22_0;
     } else {
      phi5 = ((var4 - var3)) | 0;
      break If_22_0;
     }
    }
    if (var0 <= phi5) {
     var7 = (th.hb);
     java$lang$String.prototype.V$getChars$I$I$$C$I.call(arg0,arg1,arg2,var7,(java$nio$HeapCharBuffer.prototype.I$ix$I.call(th,var3)));
     var8 = ((var3 + var0)) | 0;
     var9 = (th.Ljava$nio$CharBuffer$$position$I(var8));
     return th;
    } else {
     var6 = new java$nio$BufferOverflowException();
     java$nio$BufferOverflowException.prototype.V$$init$$$.call(var6);
     throw bytecoder.registerStack(var6, new Error().stack);
    }
  }

  I$ix$I(arg0) {
    var th = this;
    return (arg0 + (th.offset));
  }

  Ljava$nio$CharBuffer$$put$C(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var0 = (th.hb);
    var1 = ((th.I$nextPutIndex$$())) | 0;
    var0.data[(java$nio$HeapCharBuffer.prototype.I$ix$I.call(th,var1))] = arg0;
    return th;
  }

  Ljava$nio$ByteOrder$$charRegionOrder$$() {
    var th = this;
    return (java$nio$HeapCharBuffer.prototype.Ljava$nio$ByteOrder$$order$$.call(th));
  }

  Ljava$nio$ByteOrder$$order$$() {
    java$nio$ByteOrder.$i;
    return (java$nio$ByteOrder.Ljava$nio$ByteOrder$$nativeOrder$$());
  }

  C$get$I(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var0 = (th.hb);
    var1 = ((th.I$checkIndex$I(arg0))) | 0;
    return (var0.data[(java$nio$HeapCharBuffer.prototype.I$ix$I.call(th,var1))]);
  }

  Ljava$lang$String$$toString$I$I(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    TryCatch_4_0: {
     try {
      var1 = new java$lang$String();
      java$lang$String.prototype.V$$init$$$C$I$I.call(var1,(th.hb),(arg0 + (th.offset)),(arg1 - arg0));
      break TryCatch_4_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$StringIndexOutOfBoundsException) {
       var0 = new java$lang$IndexOutOfBoundsException();
       java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(var0);
       throw bytecoder.registerStack(var0, new Error().stack);
      }
      throw __ex;
     }
    }
    return var1;
  }

  Ljava$nio$CharBuffer$$put$$C$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    th.V$checkSession$$();
    var0 = (arg0.data.length) | 0;
    var1 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,arg2,var0))) | 0;
    var2 = ((th.I$position$$())) | 0;
    var3 = ((th.I$limit$$())) | 0;
    if (arg2 <= (var3 - var2)) {
     var5 = (th.hb);
     java$lang$System.V$arraycopy$$C$I$$C$I$I(arg0,arg1,var5,(java$nio$HeapCharBuffer.prototype.I$ix$I.call(th,var2)),arg2);
     var6 = ((var2 + arg2)) | 0;
     var7 = (th.Ljava$nio$CharBuffer$$position$I(var6));
     return th;
    } else {
     var4 = new java$nio$BufferOverflowException();
     java$nio$BufferOverflowException.prototype.V$$init$$$.call(var4);
     throw bytecoder.registerStack(var4, new Error().stack);
    }
  }

  Ljava$nio$CharBuffer$$put$I$C(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var0 = (th.hb);
    var1 = ((th.I$checkIndex$I(arg0))) | 0;
    var0.data[(java$nio$HeapCharBuffer.prototype.I$ix$I.call(th,var1))] = arg1;
    return th;
  }
}


class java$lang$RuntimeException extends java$lang$Exception {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$RuntimeException,
        'java.lang.RuntimeException',
         [java$lang$Exception,java$lang$Throwable,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$Exception.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Exception.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$Exception.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$lang$Long extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Long,
        'java.lang.Long',
         [java$lang$Long,java$lang$Number,java$lang$Comparable,java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    java$lang$Long.$i;
    java$lang$Long.TYPE = bytecoder.primitives.long;
    return;
  }

  static Ljava$lang$Long$$valueOf$J(arg0) {
    var var0 = null;
    java$lang$Long.$i;
    var0 = new java$lang$Long();
    java$lang$Long.prototype.V$$init$$J.call(var0,arg0);
    return var0;
  }

  V$$init$$J(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Number.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.value = arg0;
    return;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (java$lang$Long.prototype.I$compareTo$Ljava$lang$Long$.call(th,var0));
  }

  I$compareTo$Ljava$lang$Long$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var0 = (th.value);
    var1 = (java$lang$Long.prototype.J$longValue$$.call(arg0));
    java$lang$Long.$i;
    return (java$lang$Long.I$compare$J$J(var0,var1));
  }

  J$longValue$$() {
    var th = this;
    return (th.value);
  }

  static I$compare$J$J(arg0,arg1) {
    var phi0 = 0;
    If_3_0: {
     if (arg0 >= arg1) {
      if (bytecoder.cmp(arg0,arg1) != 0) {
       phi0 = (1) | 0;
       break If_3_0;
      } else {
       phi0 = (0) | 0;
       break If_3_0;
      }
     } else {
      phi0 = (-1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  static I$numberOfLeadingZeros$J(arg0) {
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var0 = (((arg0 >>> 32) | 0)) | 0;
    If_7_0: {
     if (var0 != 0) {
      java$lang$Integer.$i;
      phi2 = ((32 + (java$lang$Integer.I$numberOfLeadingZeros$I(var0)))) | 0;
      break If_7_0;
     } else {
      var1 = ((arg0 | 0)) | 0;
      java$lang$Integer.$i;
      phi2 = ((32 + (java$lang$Integer.I$numberOfLeadingZeros$I(var1)))) | 0;
      break If_7_0;
     }
    }
    return phi2;
  }

  static I$numberOfTrailingZeros$J(arg0) {
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var0 = ((arg0 | 0)) | 0;
    If_5_0: {
     if (var0 != 0) {
      java$lang$Integer.$i;
      phi2 = ((32 + (java$lang$Integer.I$numberOfTrailingZeros$I(var0)))) | 0;
      break If_5_0;
     } else {
      var1 = (((arg0 >>> 32) | 0)) | 0;
      java$lang$Integer.$i;
      phi2 = ((32 + (java$lang$Integer.I$numberOfTrailingZeros$I(var1)))) | 0;
      break If_5_0;
     }
    }
    return phi2;
  }

  I$intValue$$() {
    var th = this;
    return ((th.value) | 0);
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = 0;
    var0 = (th.value);
    java$lang$Long.$i;
    return (java$lang$Long.Ljava$lang$String$$toString$J$I(var0,10));
  }

  static Ljava$lang$String$$toString$J$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Long'].Ljava$lang$String$$toString$J$I(arg0, arg1);
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var phi2 = 0;
    if (th != arg0) {
     If_7_0: {
      if (arg0 == null) {
       break If_7_0;
      } else {
       if (((th).constructor.$rt) == ((arg0).constructor.$rt)) {
        var0 = arg0;
        var1 = (th.value);
        If_24_0: {
         if (bytecoder.cmp(var1,(java$lang$Long.prototype.J$longValue$$.call(var0))) != 0) {
          phi2 = (0) | 0;
          break If_24_0;
         } else {
          phi2 = (1) | 0;
          break If_24_0;
         }
        }
        return phi2;
       } else {
        break If_7_0;
       }
      }
     }
     return 0;
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    return ((th.value) | 0);
  }
}


class java$lang$AssertionError extends java$lang$Error {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$AssertionError,
        'java.lang.AssertionError',
         [java$lang$AssertionError,java$lang$Throwable,java$lang$Error,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$AssertionError.prototype.V$$init$$Ljava$lang$String$.call(th,(java$lang$String.Ljava$lang$String$$valueOf$Ljava$lang$Object$(arg0)));
    If_8_0: {
     if (bytecoder.instanceOf(arg0,java$lang$Throwable) == 0) {
      break If_8_0;
     } else {
      var0 = arg0;
      var1 = (th.Ljava$lang$Throwable$$initCause$Ljava$lang$Throwable$(var0));
      break If_8_0;
     }
    }
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$Error.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Error.prototype.V$$init$$$.call(th);
    return;
  }
}


class jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError extends java$lang$Error {
  nativeObject = null;

  runtimeExceptionSupplier = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError,
        'jdk.internal.misc.ScopedMemoryAccess$ScopedAccessError',
         [jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError,java$lang$Throwable,java$lang$Error,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$RuntimeException$$newRuntimeException$$() {
    var th = this;
    var var0 = null;
    var0 = (th.runtimeExceptionSupplier);
    return (var0.Ljava$lang$Object$$get$$());
  }
}


class java$io$OutputStream extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$OutputStream,
        'java.io.OutputStream',
         [java$io$Flushable,java$io$Closeable,java$lang$AutoCloseable,java$io$OutputStream,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$Object.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$Set extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Set,
        'java.util.Set',
         [java$util$Set,java$util$Collection,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$Short extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Short,
        'java.lang.Short',
         [java$lang$Number,java$lang$Short,java$lang$Comparable,java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    java$lang$Short.$i;
    java$lang$Short.TYPE = bytecoder.primitives.short;
    return;
  }

  static Ljava$lang$Short$$valueOf$S(arg0) {
    var var0 = null;
    java$lang$Short.$i;
    var0 = new java$lang$Short();
    java$lang$Short.prototype.V$$init$$S.call(var0,arg0);
    return var0;
  }

  V$$init$$S(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Number.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.value = arg0;
    return;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (java$lang$Short.prototype.I$compareTo$Ljava$lang$Short$.call(th,var0));
  }

  I$compareTo$Ljava$lang$Short$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var0 = (th.value);
    var1 = (arg0.S$shortValue$$());
    java$lang$Short.$i;
    return (java$lang$Short.I$compare$S$S(var0,var1));
  }

  static I$compare$S$S(arg0,arg1) {
    var phi0 = 0;
    If_3_0: {
     if (arg0 >= arg1) {
      if (arg0 != arg1) {
       phi0 = (1) | 0;
       break If_3_0;
      } else {
       phi0 = (0) | 0;
       break If_3_0;
      }
     } else {
      phi0 = (-1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  I$intValue$$() {
    var th = this;
    return (th.value);
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = 0;
    var0 = (th.value);
    java$lang$Short.$i;
    return (java$lang$Short.Ljava$lang$String$$toString$S$I(var0,10));
  }

  static Ljava$lang$String$$toString$S$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Short'].Ljava$lang$String$$toString$S$I(arg0, arg1);
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var phi2 = 0;
    if (th != arg0) {
     If_7_0: {
      if (arg0 == null) {
       break If_7_0;
      } else {
       if (((th).constructor.$rt) == ((arg0).constructor.$rt)) {
        var0 = arg0;
        var1 = (th.value);
        If_23_0: {
         if (var1 != (var0.S$shortValue$$())) {
          phi2 = (0) | 0;
          break If_23_0;
         } else {
          phi2 = (1) | 0;
          break If_23_0;
         }
        }
        return phi2;
       } else {
        break If_7_0;
       }
      }
     }
     return 0;
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    return (th.value);
  }
}


class java$io$Writer extends java$lang$Object {
  nativeObject = null;

  lock = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$Writer,
        'java.io.Writer',
         [java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$Closeable,java$lang$AutoCloseable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    if (arg0 != null) {
     var1 = th;
     var1.lock = arg0;
     return;
    } else {
     var0 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$$init$$Ljava$io$Writer$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = ((arg0).constructor.$rt);
    If_10_0: {
     If_10_1: {
      if (((th).constructor.$rt) != java$io$BufferedWriter.$rt) {
       break If_10_1;
      } else {
       If_14_0: {
        if (var0 == java$io$OutputStreamWriter.$rt) {
         break If_14_0;
        } else {
         if (var0 != java$io$FileWriter.$rt) {
          break If_10_1;
         } else {
          break If_14_0;
         }
        }
       }
       var1 = th;
       jdk$internal$misc$InternalLock.$i;
       var1.lock = (jdk$internal$misc$InternalLock.Ljava$lang$Object$$newLockOr$Ljava$lang$Object$(arg0));
       break If_10_0;
      }
     }
     var2 = th;
     var2.lock = arg0;
     break If_10_0;
    }
    return;
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.lock = th;
    return;
  }
}


class java$util$ImmutableCollections$ListItr extends java$lang$Object {
  nativeObject = null;

  list = null;
  size = 0;
  cursor = 0;
  isListIterator = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$ListItr,
        'java.util.ImmutableCollections$ListItr',
         [java$util$Iterator,java$util$ImmutableCollections$ListItr,java$util$ListIterator,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$List$$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.list = arg0;
    var1 = th;
    var1.size = arg1;
    var2 = th;
    var2.cursor = arg2;
    var3 = th;
    var3.isListIterator = 1;
    return;
  }

  Ljava$lang$Object$$next$$() {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    TryCatch_2_0: {
     try {
      var1 = ((th.cursor)) | 0;
      var2 = (th.list);
      var3 = (var2.Ljava$lang$Object$$get$I(var1));
      var4 = th;
      var4.cursor = (var1 + 1);
      break TryCatch_2_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$IndexOutOfBoundsException) {
       var0 = new java$util$NoSuchElementException();
       java$util$NoSuchElementException.prototype.V$$init$$$.call(var0);
       throw bytecoder.registerStack(var0, new Error().stack);
      }
      throw __ex;
     }
    }
    return var3;
  }

  V$set$Ljava$lang$Object$(arg0) {
    java$util$ImmutableCollections.$i;
    throw bytecoder.registerStack((java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$()), new Error().stack);
  }

  V$$init$$Ljava$util$List$$I(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.list = arg0;
    var1 = th;
    var1.size = arg1;
    var2 = th;
    var2.cursor = 0;
    var3 = th;
    var3.isListIterator = 0;
    return;
  }

  Z$hasNext$$() {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((th.cursor) == (th.size)) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }

  I$previousIndex$$() {
    var th = this;
    if ((th.isListIterator) != 0) {
     return ((th.cursor) - 1);
    } else {
     java$util$ImmutableCollections.$i;
     throw bytecoder.registerStack((java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$()), new Error().stack);
    }
  }
}


class java$util$List extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$List,
        'java.util.List',
         [java$util$List,java$util$Collection,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$util$List$$of$$Ljava$lang$Object$(arg0) {
    var var0 = null;
    var var1 = null;
    if ((arg0.data.length) >= 0 && (arg0.data.length) <= 2) switch ((arg0.data.length) - 0) {
     case 0: {
      java$util$ImmutableCollections.$i;
      return (java$util$ImmutableCollections.EMPTY_LIST);
     }
     case 1: {
      var1 = new java$util$ImmutableCollections$List12();
      java$util$ImmutableCollections$List12.prototype.V$$init$$Ljava$lang$Object$.call(var1,(arg0.data[0]));
      return var1;
     }
     case 2: {
      var0 = new java$util$ImmutableCollections$List12();
      java$util$ImmutableCollections$List12.prototype.V$$init$$Ljava$lang$Object$$Ljava$lang$Object$.call(var0,(arg0.data[0]),(arg0.data[1]));
      return var0;
     }
    } else {
     java$util$ImmutableCollections.$i;
     return (java$util$ImmutableCollections.Ljava$util$List$$listFromArray$$Ljava$lang$Object$(arg0));
    }
  }
}


class java$lang$Double extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0.0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Double,
        'java.lang.Double',
         [java$lang$Double,java$lang$Number,java$lang$Comparable,java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    java$lang$Double.$i;
    java$lang$Double.TYPE = bytecoder.primitives.double;
    return;
  }

  static Ljava$lang$Double$$valueOf$D(arg0) {
    var var0 = null;
    java$lang$Double.$i;
    var0 = new java$lang$Double();
    java$lang$Double.prototype.V$$init$$D.call(var0,arg0);
    return var0;
  }

  V$$init$$D(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Number.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.value = arg0;
    return;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (java$lang$Double.prototype.I$compareTo$Ljava$lang$Double$.call(th,var0));
  }

  I$compareTo$Ljava$lang$Double$(arg0) {
    var th = this;
    var var0 = .0;
    var var1 = .0;
    var0 = (th.value);
    var1 = (java$lang$Double.prototype.D$doubleValue$$.call(arg0));
    java$lang$Double.$i;
    return (java$lang$Double.I$compare$D$D(var0,var1));
  }

  D$doubleValue$$() {
    var th = this;
    return (th.value);
  }

  static I$compare$D$D(arg0,arg1) {
    var phi0 = 0;
    If_3_0: {
     if (arg0 >= arg1) {
      if (bytecoder.cmp(arg0,arg1) != 0) {
       phi0 = (1) | 0;
       break If_3_0;
      } else {
       phi0 = (0) | 0;
       break If_3_0;
      }
     } else {
      phi0 = (-1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  I$intValue$$() {
    var th = this;
    return ((th.value) | 0);
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = .0;
    var0 = (th.value);
    java$lang$Double.$i;
    return (java$lang$Double.Ljava$lang$String$$toString$D(var0));
  }

  static Ljava$lang$String$$toString$D(arg0) {
    return bytecoder.imports['java.lang.Double'].Ljava$lang$String$$toString$D(arg0);
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = .0;
    var phi2 = 0;
    if (th != arg0) {
     If_7_0: {
      if (arg0 == null) {
       break If_7_0;
      } else {
       if (((th).constructor.$rt) == ((arg0).constructor.$rt)) {
        var0 = arg0;
        var1 = (th.value);
        If_24_0: {
         if (bytecoder.cmp(var1,(java$lang$Double.prototype.D$doubleValue$$.call(var0))) != 0) {
          phi2 = (0) | 0;
          break If_24_0;
         } else {
          phi2 = (1) | 0;
          break If_24_0;
         }
        }
        return phi2;
       } else {
        break If_7_0;
       }
      }
     }
     return 0;
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    return ((th.value) | 0);
  }
}


class java$lang$VirtualMachineError extends java$lang$Error {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$VirtualMachineError,
        'java.lang.VirtualMachineError',
         [java$lang$VirtualMachineError,java$lang$Throwable,java$lang$Error,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$Error.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$Error.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$Error.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$util$Properties extends java$util$Hashtable {
  nativeObject = null;

  static UNSAFE = null;
  map = null;
  defaults = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Properties,
        'java.util.Properties',
         [java$util$Hashtable,java$util$Properties,java$io$Serializable,java$util$Map,java$util$Dictionary,java$lang$Cloneable,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    jdk$internal$misc$Unsafe.$i;
    var0 = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    java$util$Properties.$i;
    java$util$Properties.UNSAFE = var0;
    return;
  }

  V$$init$$$() {
    var th = this;
    java$util$Properties.prototype.V$$init$$Ljava$util$Properties$$I.call(th,null,8);
    return;
  }

  V$$init$$Ljava$util$Properties$$I(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    java$util$Hashtable.prototype.V$$init$$Ljava$lang$Void$.call(th,null);
    var0 = th;
    var1 = new java$util$concurrent$ConcurrentHashMap();
    java$util$concurrent$ConcurrentHashMap.prototype.V$$init$$I.call(var1,arg1);
    var0.map = var1;
    var2 = th;
    var2.defaults = arg0;
    java$util$Properties.$i;
    jdk$internal$misc$Unsafe.prototype.V$storeFence$$.call((java$util$Properties.UNSAFE));
    return;
  }

  Ljava$lang$Object$$setProperty$Ljava$lang$String$$Ljava$lang$String$(arg0,arg1) {
    var th = this;
    return (java$util$Properties.prototype.Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$.call(th,arg0,arg1));
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var0 = (th.map);
    return (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$.call(var0,arg0,arg1));
  }

  Ljava$lang$String$$getProperty$Ljava$lang$String$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var0 = (th.map);
    var1 = (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$Object$$get$Ljava$lang$Object$.call(var0,arg0));
    If_11_0: {
     if (bytecoder.instanceOf(var1,java$lang$String) == 0) {
      phi2 = null;
      break If_11_0;
     } else {
      phi2 = var1;
      break If_11_0;
     }
    }
    var3 = phi2;
    If_19_0: {
     If_19_1: {
      if (var3 != null) {
       break If_19_1;
      } else {
       var4 = (th.defaults);
       if (var4 == null) {
        break If_19_1;
       } else {
        phi5 = (java$util$Properties.prototype.Ljava$lang$String$$getProperty$Ljava$lang$String$.call(var4,arg0));
        break If_19_0;
       }
      }
     }
     phi5 = var3;
     break If_19_0;
    }
    return phi5;
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var0 = (th.map);
    return (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$.call(var0,arg0,arg1));
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = (th.map);
    return (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$Object$$get$Ljava$lang$Object$.call(var0,arg0));
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var0 = (th.map);
    return (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$String$$toString$$.call(var0));
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = (th.map);
    return (java$util$concurrent$ConcurrentHashMap.prototype.Z$equals$Ljava$lang$Object$.call(var0,arg0));
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var0 = (th.map);
    return (java$util$concurrent$ConcurrentHashMap.prototype.I$hashCode$$.call(var0));
  }

  Z$isEmpty$$() {
    var th = this;
    var var0 = null;
    var0 = (th.map);
    return (java$util$concurrent$ConcurrentHashMap.prototype.Z$isEmpty$$.call(var0));
  }

  I$size$$() {
    var th = this;
    var var0 = null;
    var0 = (th.map);
    return (java$util$concurrent$ConcurrentHashMap.prototype.I$size$$.call(var0));
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = (th.map);
    return (java$util$concurrent$ConcurrentHashMap.prototype.Z$containsKey$Ljava$lang$Object$.call(var0,arg0));
  }

  Ljava$util$Set$$entrySet$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var0 = new java$util$Properties$EntrySet();
    var1 = (th.map);
    java$util$Properties$EntrySet.prototype.V$$init$$Ljava$util$Set$.call(var0,(java$util$concurrent$ConcurrentHashMap.prototype.Ljava$util$Set$$entrySet$$.call(var1)));
    java$util$Collections.$i;
    return (java$util$Collections.Ljava$util$Set$$synchronizedSet$Ljava$util$Set$$Ljava$lang$Object$(var0,th));
  }
}


class java$lang$Float extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0.0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$Float,
        'java.lang.Float',
         [java$lang$Number,java$lang$Float,java$lang$Comparable,java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    java$lang$Float.$i;
    java$lang$Float.TYPE = bytecoder.primitives.float;
    return;
  }

  static Ljava$lang$Float$$valueOf$F(arg0) {
    var var0 = null;
    java$lang$Float.$i;
    var0 = new java$lang$Float();
    java$lang$Float.prototype.V$$init$$F.call(var0,arg0);
    return var0;
  }

  V$$init$$F(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Number.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.value = arg0;
    return;
  }

  static Z$isNaN$F(arg0) {
    return bytecoder.imports['java.lang.Float'].Z$isNaN$F(arg0);
  }

  static Ljava$lang$String$$toString$F(arg0) {
    return bytecoder.imports['java.lang.Float'].Ljava$lang$String$$toString$F(arg0);
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = arg0;
    return (java$lang$Float.prototype.I$compareTo$Ljava$lang$Float$.call(th,var0));
  }

  I$compareTo$Ljava$lang$Float$(arg0) {
    var th = this;
    var var0 = .0;
    var var1 = .0;
    var0 = (th.value);
    var1 = (java$lang$Float.prototype.F$floatValue$$.call(arg0));
    java$lang$Float.$i;
    return (java$lang$Float.I$compare$F$F(var0,var1));
  }

  F$floatValue$$() {
    var th = this;
    return (th.value);
  }

  static I$compare$F$F(arg0,arg1) {
    var phi0 = 0;
    If_3_0: {
     if (arg0 >= arg1) {
      if (bytecoder.cmp(arg0,arg1) != 0) {
       phi0 = (1) | 0;
       break If_3_0;
      } else {
       phi0 = (0) | 0;
       break If_3_0;
      }
     } else {
      phi0 = (-1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  I$intValue$$() {
    var th = this;
    return ((th.value) | 0);
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = .0;
    var0 = (th.value);
    java$lang$Float.$i;
    return (java$lang$Float.Ljava$lang$String$$toString$F(var0));
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = .0;
    var phi2 = 0;
    if (th != arg0) {
     If_7_0: {
      if (arg0 == null) {
       break If_7_0;
      } else {
       if (((th).constructor.$rt) == ((arg0).constructor.$rt)) {
        var0 = arg0;
        var1 = (th.value);
        If_24_0: {
         if (bytecoder.cmp(var1,(java$lang$Float.prototype.F$floatValue$$.call(var0))) != 0) {
          phi2 = (0) | 0;
          break If_24_0;
         } else {
          phi2 = (1) | 0;
          break If_24_0;
         }
        }
        return phi2;
       } else {
        break If_7_0;
       }
      }
     }
     return 0;
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    return ((th.value) | 0);
  }
}


class java$util$Collections$SynchronizedCollection extends java$lang$Object {
  nativeObject = null;

  c = null;
  mutex = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Collections$SynchronizedCollection,
        'java.util.Collections$SynchronizedCollection',
         [java$util$Collections$SynchronizedCollection,java$util$Collection,java$lang$Iterable,java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$Collection$$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.c = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0));
    var1 = th;
    var1.mutex = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg1));
    return;
  }

  Ljava$util$Iterator$$iterator$$() {
    var th = this;
    var var0 = null;
    var0 = (th.c);
    return (var0.Ljava$util$Iterator$$iterator$$());
  }

  I$size$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = (th.mutex);
    // Monitor enter on var0
    TryCatch_6_0: {
     try {
      var2 = (th.c);
      var3 = ((var2.I$size$$())) | 0;
      // Monitor exit on var0
      break TryCatch_6_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_7_0: {
        var1 = __ex;
        // Monitor exit on var0
        break TryCatch_7_0;
       }
       throw bytecoder.registerStack(var1, new Error().stack);
      }
      throw __ex;
     }
    }
    return var3;
  }

  Z$isEmpty$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = (th.mutex);
    // Monitor enter on var0
    TryCatch_6_0: {
     try {
      var2 = (th.c);
      var3 = (var2.Z$isEmpty$$());
      // Monitor exit on var0
      break TryCatch_6_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_7_0: {
        var1 = __ex;
        // Monitor exit on var0
        break TryCatch_7_0;
       }
       throw bytecoder.registerStack(var1, new Error().stack);
      }
      throw __ex;
     }
    }
    return var3;
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = (th.mutex);
    // Monitor enter on var0
    TryCatch_6_0: {
     try {
      var2 = (th.c);
      var3 = (var2.Ljava$lang$String$$toString$$());
      // Monitor exit on var0
      break TryCatch_6_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_7_0: {
        var1 = __ex;
        // Monitor exit on var0
        break TryCatch_7_0;
       }
       throw bytecoder.registerStack(var1, new Error().stack);
      }
      throw __ex;
     }
    }
    return var3;
  }
}


class java$util$ConcurrentModificationException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ConcurrentModificationException,
        'java.util.ConcurrentModificationException',
         [java$lang$Exception,java$util$ConcurrentModificationException,java$lang$Throwable,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$util$Collections$SynchronizedSet extends java$util$Collections$SynchronizedCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Collections$SynchronizedSet,
        'java.util.Collections$SynchronizedSet',
         [java$util$Collections$SynchronizedSet,java$util$Set,java$util$Collections$SynchronizedCollection,java$util$Collection,java$lang$Iterable,java$io$Serializable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$Set$$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    java$util$Collections$SynchronizedCollection.prototype.V$$init$$Ljava$util$Collection$$Ljava$lang$Object$.call(th,arg0,arg1);
    return;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    if (th != arg0) {
     var0 = (th.mutex);
     // Monitor enter on var0
     TryCatch_11_0: {
      try {
       var2 = (th.c);
       var3 = (var2.Z$equals$Ljava$lang$Object$(arg0));
       // Monitor exit on var0
       break TryCatch_11_0;
      } catch (__ex) {
       if (__ex instanceof java$lang$Throwable) {
        TryCatch_12_0: {
         var1 = __ex;
         // Monitor exit on var0
         break TryCatch_12_0;
        }
        throw bytecoder.registerStack(var1, new Error().stack);
       }
       throw __ex;
      }
     }
     return var3;
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = (th.mutex);
    // Monitor enter on var0
    TryCatch_6_0: {
     try {
      var2 = (th.c);
      var3 = ((var2.I$hashCode$$())) | 0;
      // Monitor exit on var0
      break TryCatch_6_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_7_0: {
        var1 = __ex;
        // Monitor exit on var0
        break TryCatch_7_0;
       }
       throw bytecoder.registerStack(var1, new Error().stack);
      }
      throw __ex;
     }
    }
    return var3;
  }
}


class java$lang$IndexOutOfBoundsException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$IndexOutOfBoundsException,
        'java.lang.IndexOutOfBoundsException',
         [java$lang$IndexOutOfBoundsException,java$lang$Exception,java$lang$Throwable,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }
}


class java$io$FileOutputStream extends java$io$OutputStream {
  nativeObject = null;

  fd = null;
  path = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$FileOutputStream,
        'java.io.FileOutputStream',
         [java$io$Flushable,java$io$FileOutputStream,java$io$Closeable,java$lang$AutoCloseable,java$io$OutputStream,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$io$FileDescriptor$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$io$OutputStream.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.fd = arg0;
    var1 = th;
    var1.path = null;
    return;
  }
}


class java$lang$IllegalStateException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$IllegalStateException,
        'java.lang.IllegalStateException',
         [java$lang$Exception,java$lang$IllegalStateException,java$lang$Throwable,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$io$FilterOutputStream extends java$io$OutputStream {
  nativeObject = null;

  closeLock = null;
  out = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$FilterOutputStream,
        'java.io.FilterOutputStream',
         [java$io$Flushable,java$io$Closeable,java$lang$AutoCloseable,java$io$FilterOutputStream,java$io$OutputStream,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$io$OutputStream$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    java$io$OutputStream.prototype.V$$init$$$.call(th);
    var0 = th;
    var1 = new java$lang$Object();
    java$lang$Object.prototype.V$$init$$$.call(var1);
    var0.closeLock = var1;
    var2 = th;
    var2.out = arg0;
    return;
  }
}


class java$io$BufferedWriter extends java$io$Writer {
  nativeObject = null;

  out = null;
  cb = null;
  nChars = 0;
  maxChars = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$BufferedWriter,
        'java.io.BufferedWriter',
         [java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$Closeable,java$lang$AutoCloseable,java$io$BufferedWriter,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$io$Writer$(arg0) {
    var th = this;
    java$io$BufferedWriter.prototype.V$$init$$Ljava$io$Writer$$I$I.call(th,arg0,(java$io$BufferedWriter.I$initialBufferSize$$()),8192);
    return;
  }

  static I$initialBufferSize$$() {
    var var0 = null;
    jdk$internal$misc$VM.$i;
    If_4_0: {
     if ((jdk$internal$misc$VM.Z$isBooted$$()) == 0) {
      break If_4_0;
     } else {
      var0 = (java$lang$Thread.Ljava$lang$Thread$$currentThread$$());
      if ((java$lang$Thread.prototype.Z$isVirtual$$.call(var0)) == 0) {
       break If_4_0;
      } else {
       return 512;
      }
     }
    }
    return 8192;
  }

  V$$init$$Ljava$io$Writer$$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    java$io$Writer.prototype.V$$init$$Ljava$io$Writer$.call(th,arg0);
    if (arg1 > 0) {
     var1 = th;
     var1.out = arg0;
     var2 = th;
     var2.cb = bytecoder.newarray((arg1),0);
     var3 = th;
     var3.nChars = arg1;
     var4 = th;
     var4.maxChars = arg2;
     return;
    } else {
     var0 = new java$lang$IllegalArgumentException();
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[68]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }
}


class java$io$OutputStreamWriter extends java$io$Writer {
  nativeObject = null;

  se = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$OutputStreamWriter,
        'java.io.OutputStreamWriter',
         [java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$OutputStreamWriter,java$io$Closeable,java$lang$AutoCloseable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$io$OutputStream$$Ljava$nio$charset$Charset$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    java$io$Writer.prototype.V$$init$$Ljava$lang$Object$.call(th,arg0);
    if (arg1 != null) {
     var1 = th;
     var2 = (java$io$OutputStreamWriter.Ljava$lang$Object$$lockFor$Ljava$io$OutputStreamWriter$(th));
     sun$nio$cs$StreamEncoder.$i;
     var1.se = (sun$nio$cs$StreamEncoder.Lsun$nio$cs$StreamEncoder$$forOutputStreamWriter$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$Charset$(arg0,var2,arg1));
     return;
    } else {
     var0 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[62]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  static Ljava$lang$Object$$lockFor$Ljava$io$OutputStreamWriter$(arg0) {
    var var0 = null;
    var0 = ((arg0).constructor.$rt);
    If_7_0: {
     if (var0 == java$io$OutputStreamWriter.$rt) {
      break If_7_0;
     } else {
      if (var0 != java$io$FileWriter.$rt) {
       return arg0;
      } else {
       break If_7_0;
      }
     }
    }
    jdk$internal$misc$InternalLock.$i;
    return (jdk$internal$misc$InternalLock.Ljava$lang$Object$$newLockOr$Ljava$lang$Object$(arg0));
  }
}


class java$nio$BufferUnderflowException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$BufferUnderflowException,
        'java.nio.BufferUnderflowException',
         [java$lang$Exception,java$lang$Throwable,java$lang$RuntimeException,java$nio$BufferUnderflowException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$lang$ClassCastException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$ClassCastException,
        'java.lang.ClassCastException',
         [java$lang$ClassCastException,java$lang$Exception,java$lang$Throwable,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$AbstractList extends java$util$AbstractCollection {
  nativeObject = null;

  modCount = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$AbstractList,
        'java.util.AbstractList',
         [java$util$AbstractCollection,java$util$List,java$util$Collection,java$util$AbstractList,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    java$util$AbstractCollection.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.modCount = 0;
    return;
  }

  Z$add$Ljava$lang$Object$(arg0) {
    var th = this;
    th.V$add$I$Ljava$lang$Object$((th.I$size$$()),arg0);
    return 1;
  }

  V$add$I$Ljava$lang$Object$(arg0,arg1) {
    var var0 = null;
    var0 = new java$lang$UnsupportedOperationException();
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var0);
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  Ljava$lang$Object$$set$I$Ljava$lang$Object$(arg0,arg1) {
    var var0 = null;
    var0 = new java$lang$UnsupportedOperationException();
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var0);
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  I$indexOf$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var0 = (th.Ljava$util$ListIterator$$listIterator$$());
    If_6_0: {
     If_6_1: {
      If_6_2: {
       if (arg0 != null) {
        break If_6_2;
       } else {
        break If_6_1;
       }
      }
      L716396784: while(true) {
       if ((var0.Z$hasNext$$()) == 0) {
        break If_6_0;
       } else {
        var1 = (var0.Ljava$lang$Object$$next$$());
        if ((arg0.Z$equals$Ljava$lang$Object$(var1)) == 0) {
         continue L716396784;
        } else {
         return (var0.I$previousIndex$$());
        }
       }
      }
     }
     L261034189: while(true) {
      if ((var0.Z$hasNext$$()) == 0) {
       break If_6_0;
      } else {
       if ((var0.Ljava$lang$Object$$next$$()) != null) {
        continue L261034189;
       } else {
        return (var0.I$previousIndex$$());
       }
      }
     }
    }
    return -1;
  }

  Ljava$util$ListIterator$$listIterator$$() {
    var th = this;
    return (th.Ljava$util$ListIterator$$listIterator$I(0));
  }

  Ljava$util$ListIterator$$listIterator$I(arg0) {
    var th = this;
    var var0 = null;
    th.V$rangeCheckForAdd$I(arg0);
    var0 = new java$util$AbstractList$ListItr();
    java$util$AbstractList$ListItr.prototype.V$$init$$Ljava$util$AbstractList$$I.call(var0,th,arg0);
    return var0;
  }

  V$rangeCheckForAdd$I(arg0) {
    var th = this;
    var var0 = null;
    If_3_0: {
     if (arg0 < 0) {
      break If_3_0;
     } else {
      if (arg0 <= (th.I$size$$())) {
       return;
      } else {
       break If_3_0;
      }
     }
    }
    var0 = new java$lang$IndexOutOfBoundsException();
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var0,(th.Ljava$lang$String$$outOfBoundsMsg$I(arg0)));
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  Ljava$lang$String$$outOfBoundsMsg$I(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var0,bytecoder.stringconstants[88]));
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var1,arg0));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[94]));
    var4 = ((th.I$size$$())) | 0;
    var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var3,var4));
    return (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var5));
  }
}


class java$lang$UnsupportedOperationException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$UnsupportedOperationException,
        'java.lang.UnsupportedOperationException',
         [java$lang$Exception,java$lang$Throwable,java$lang$UnsupportedOperationException,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$util$NoSuchElementException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$NoSuchElementException,
        'java.util.NoSuchElementException',
         [java$lang$Exception,java$lang$Throwable,java$lang$RuntimeException,java$util$NoSuchElementException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$lang$OutOfMemoryError extends java$lang$VirtualMachineError {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$OutOfMemoryError,
        'java.lang.OutOfMemoryError',
         [java$lang$VirtualMachineError,java$lang$Throwable,java$lang$Error,java$lang$OutOfMemoryError,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$VirtualMachineError.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$VirtualMachineError.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$lang$IllegalArgumentException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$IllegalArgumentException,
        'java.lang.IllegalArgumentException',
         [java$lang$Exception,java$lang$Throwable,java$lang$RuntimeException,java$lang$IllegalArgumentException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$util$ImmutableCollections$MapN extends java$util$ImmutableCollections$AbstractImmutableMap {
  nativeObject = null;

  size = 0;
  table = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$MapN,
        'java.util.ImmutableCollections$MapN',
         [java$util$ImmutableCollections$MapN,java$util$AbstractMap,java$io$Serializable,java$util$Map,java$util$ImmutableCollections$AbstractImmutableMap,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var phi4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = 0;
    var var15 = null;
    var var16 = null;
    var var17 = 0;
    java$util$ImmutableCollections$AbstractImmutableMap.prototype.V$$init$$$.call(th);
    if ((arg0.data.length & 1) == 0) {
     var1 = th;
     var1.size = (arg0.data.length >> 1);
     var2 = ((((2 * arg0.data.length) + 1) & -2)) | 0;
     var3 = th;
     var3.table = bytecoder.newarray((var2),null);
     phi4 = (0) | 0;
     L2005524871: while(true) {
      if (phi4 >= arg0.data.length) {
       return;
      } else {
       var5 = (arg0.data[phi4]);
       var6 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var5));
       var7 = (arg0.data[(phi4 + 1)]);
       var8 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var7));
       var9 = ((java$util$ImmutableCollections$MapN.prototype.I$probe$Ljava$lang$Object$.call(th,var6))) | 0;
       if (var9 < 0) {
        var14 = ((0 - (var9 + 1))) | 0;
        var15 = (th.table);
        var15.data[var14] = var6;
        var16 = (th.table);
        var17 = ((var14 + 1)) | 0;
        var16.data[var17] = var8;
        phi4 = ((phi4 + 2)) | 0;
        // Here was a goto statement
        continue L2005524871;
       } else {
        var10 = new java$lang$IllegalArgumentException();
        var11 = new java$lang$StringBuilder();
        java$lang$StringBuilder.prototype.V$$init$$$.call(var11);
        var12 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var11,bytecoder.stringconstants[72]));
        var13 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var12,var6));
        java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var10,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var13)));
        throw bytecoder.registerStack(var10, new Error().stack);
       }
      }
     }
    } else {
     var0 = new java$lang$InternalError();
     java$lang$InternalError.prototype.V$$init$$Ljava$lang$String$.call(var0,bytecoder.stringconstants[71]);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  I$probe$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var phi4 = 0;
    var0 = ((arg0.I$hashCode$$())) | 0;
    var1 = (((th.table).data.length >> 1)) | 0;
    java$lang$Math.$i;
    phi2 = (((java$lang$Math.I$floorMod$I$I(var0,var1)) << 1)) | 0;
    L1776161541: while(true) {
     var3 = ((th.table).data[phi2]);
     if (var3 != null) {
      if ((arg0.Z$equals$Ljava$lang$Object$(var3)) == 0) {
       phi2 = ((phi2 + 2)) | 0;
       If_39_0: {
        if (phi2 != (th.table).data.length) {
         phi4 = (phi2) | 0;
         break If_39_0;
        } else {
         phi4 = (0) | 0;
         break If_39_0;
        }
       }
       phi2 = (phi4) | 0;
       continue L1776161541;
      } else {
       return phi2;
      }
     } else {
      return ((0 - phi2) - 1);
     }
    }
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    if ((th.size) != 0) {
     var1 = ((java$util$ImmutableCollections$MapN.prototype.I$probe$Ljava$lang$Object$.call(th,arg0))) | 0;
     if (var1 < 0) {
      return null;
     } else {
      var2 = (th.table);
      return (var2.data[(var1 + 1)]);
     }
    } else {
     var0 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0));
     return null;
    }
  }

  I$hashCode$$() {
    var th = this;
    var phi0 = 0;
    var phi1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var var5 = null;
    var phi6 = 0;
    phi0 = (0) | 0;
    phi1 = (0) | 0;
    L1709663161: while(true) {
     if (phi1 >= (th.table).data.length) {
      return phi0;
     } else {
      var2 = ((th.table).data[phi1]);
      If_15_0: {
       if (var2 == null) {
        phi6 = (phi0) | 0;
        break If_15_0;
       } else {
        var3 = (phi0) | 0;
        var4 = ((var2.I$hashCode$$())) | 0;
        var5 = ((th.table).data[(phi1 + 1)]);
        phi6 = ((var3 + (var4 ^ (var5.I$hashCode$$())))) | 0;
        break If_15_0;
       }
      }
      phi1 = ((phi1 + 2)) | 0;
      phi0 = (phi6) | 0;
      continue L1709663161;
     }
    }
  }

  Z$isEmpty$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.size) != 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  I$size$$() {
    var th = this;
    return (th.size);
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var phi1 = 0;
    var0 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0));
    If_8_0: {
     If_8_1: {
      if ((th.size) <= 0) {
       break If_8_1;
      } else {
       if ((java$util$ImmutableCollections$MapN.prototype.I$probe$Ljava$lang$Object$.call(th,arg0)) < 0) {
        break If_8_1;
       } else {
        phi1 = (1) | 0;
        break If_8_0;
       }
      }
     }
     phi1 = (0) | 0;
     break If_8_0;
    }
    return phi1;
  }

  Ljava$util$Set$$entrySet$$() {
    var th = this;
    var var0 = null;
    var0 = new java$util$ImmutableCollections$MapN$1();
    java$util$ImmutableCollections$MapN$1.prototype.V$$init$$Ljava$util$ImmutableCollections$MapN$.call(var0,th);
    return var0;
  }
}


class java$util$AbstractSet extends java$util$AbstractCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$AbstractSet,
        'java.util.AbstractSet',
         [java$util$AbstractCollection,java$util$Set,java$util$AbstractSet,java$util$Collection,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$util$AbstractCollection.prototype.V$$init$$$.call(th);
    return;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    if (arg0 != th) {
     if (bytecoder.instanceOf(arg0,java$util$Set) != 0) {
      var0 = arg0;
      var1 = ((var0.I$size$$())) | 0;
      if (var1 == (th.I$size$$())) {
       TryCatch_25_0: {
        try {
         var2 = (th.Z$containsAll$Ljava$util$Collection$(var0));
         break TryCatch_25_0;
        } catch (__ex) {
         if (__ex instanceof java$lang$ClassCastException) {
          return 0;
         }
         if (__ex instanceof java$lang$NullPointerException) {
          return 0;
         }
         throw __ex;
        }
       }
       return var2;
      } else {
       return 0;
      }
     } else {
      return 0;
     }
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var phi1 = 0;
    var var2 = null;
    var var3 = 0;
    var phi4 = 0;
    var0 = (th.Ljava$util$Iterator$$iterator$$());
    phi1 = (0) | 0;
    L883029346: while(true) {
     if ((var0.Z$hasNext$$()) == 0) {
      return phi1;
     } else {
      var2 = (var0.Ljava$lang$Object$$next$$());
      If_15_0: {
       if (var2 == null) {
        phi4 = (phi1) | 0;
        break If_15_0;
       } else {
        var3 = (phi1) | 0;
        phi4 = ((var3 + (var2.I$hashCode$$()))) | 0;
        break If_15_0;
       }
      }
      phi1 = (phi4) | 0;
      continue L883029346;
     }
    }
  }
}


class java$io$FileInputStream extends java$io$InputStream {
  nativeObject = null;

  fd = null;
  path = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$FileInputStream,
        'java.io.FileInputStream',
         [java$io$Closeable,java$lang$AutoCloseable,java$io$FileInputStream,java$io$InputStream,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$io$FileDescriptor$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    java$io$InputStream.prototype.V$$init$$$.call(th);
    if (arg0 != null) {
     var1 = th;
     var1.fd = arg0;
     var2 = th;
     var2.path = null;
     return;
    } else {
     var0 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }
}


class sun$nio$cs$StreamEncoder extends java$io$Writer {
  nativeObject = null;

  haveLeftoverChar = 0;
  lcb = null;
  out = null;
  ch = null;
  cs = null;
  encoder = null;
  bb = null;
  maxBufferCapacity = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        sun$nio$cs$StreamEncoder,
        'sun.nio.cs.StreamEncoder',
         [java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$Closeable,java$lang$AutoCloseable,sun$nio$cs$StreamEncoder,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    sun$nio$cs$StreamEncoder.$i;
    return;
  }

  static Lsun$nio$cs$StreamEncoder$$forOutputStreamWriter$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$Charset$(arg0,arg1,arg2) {
    var var0 = null;
    sun$nio$cs$StreamEncoder.$i;
    var0 = new sun$nio$cs$StreamEncoder();
    sun$nio$cs$StreamEncoder.prototype.V$$init$$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$Charset$.call(var0,arg0,arg1,arg2);
    return var0;
  }

  V$$init$$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$Charset$(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = (arg2.Ljava$nio$charset$CharsetEncoder$$newEncoder$$());
    java$nio$charset$CodingErrorAction.$i;
    var1 = (java$nio$charset$CodingErrorAction.REPLACE);
    var2 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$CharsetEncoder$$onMalformedInput$Ljava$nio$charset$CodingErrorAction$.call(var0,var1));
    var3 = (java$nio$charset$CodingErrorAction.REPLACE);
    sun$nio$cs$StreamEncoder.prototype.V$$init$$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$CharsetEncoder$.call(th,arg0,arg1,(java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$CharsetEncoder$$onUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$.call(var2,var3)));
    return;
  }

  V$$init$$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$CharsetEncoder$(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    java$io$Writer.prototype.V$$init$$Ljava$lang$Object$.call(th,arg1);
    var0 = th;
    var0.haveLeftoverChar = 0;
    var1 = th;
    var1.lcb = null;
    var2 = th;
    var2.out = arg0;
    var3 = th;
    var3.ch = null;
    var4 = th;
    var4.cs = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$Charset$$charset$$.call(arg2));
    var5 = th;
    var5.encoder = arg2;
    var6 = th;
    java$nio$ByteBuffer.$i;
    var6.bb = (java$nio$ByteBuffer.Ljava$nio$ByteBuffer$$allocate$I(512));
    var7 = th;
    var7.maxBufferCapacity = 8192;
    return;
  }
}


class java$util$ImmutableCollections$AbstractImmutableCollection extends java$util$AbstractCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$AbstractImmutableCollection,
        'java.util.ImmutableCollections$AbstractImmutableCollection',
         [java$util$AbstractCollection,java$util$Collection,java$util$ImmutableCollections$AbstractImmutableCollection,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$util$AbstractCollection.prototype.V$$init$$$.call(th);
    return;
  }

  V$clear$$() {
    java$util$ImmutableCollections.$i;
    throw bytecoder.registerStack((java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$()), new Error().stack);
  }

  Z$add$Ljava$lang$Object$(arg0) {
    java$util$ImmutableCollections.$i;
    throw bytecoder.registerStack((java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$()), new Error().stack);
  }
}


class java$lang$NullPointerException extends java$lang$RuntimeException {
  nativeObject = null;

  extendedMessageState = 0;
  extendedMessage = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$NullPointerException,
        'java.lang.NullPointerException',
         [java$lang$NullPointerException,java$lang$Exception,java$lang$Throwable,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  Ljava$lang$String$$getMessage$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = (java$lang$RuntimeException.prototype.Ljava$lang$String$$getMessage$$.call(th));
    if (var0 != null) {
     return var0;
    } else {
     // Monitor enter on th
     TryCatch_8_0: {
      try {
       If_18_0: {
        if ((th.extendedMessageState) != 1) {
         break If_18_0;
        } else {
         var2 = th;
         var2.extendedMessage = (java$lang$NullPointerException.prototype.Ljava$lang$String$$getExtendedNPEMessage$$.call(th));
         var3 = th;
         var3.extendedMessageState = 2;
         break If_18_0;
        }
       }
       var4 = (th.extendedMessage);
       // Monitor exit on th
       break TryCatch_8_0;
      } catch (__ex) {
       if (__ex instanceof java$lang$Throwable) {
        TryCatch_9_0: {
         var1 = __ex;
         // Monitor exit on th
         break TryCatch_9_0;
        }
        throw bytecoder.registerStack(var1, new Error().stack);
       }
       throw __ex;
      }
     }
     return var4;
    }
  }

  Ljava$lang$String$$getExtendedNPEMessage$$() {
    return bytecoder.imports['java.lang.NullPointerException'].Ljava$lang$String$$getExtendedNPEMessage$$(this);
  }
}


class java$util$Properties$EntrySet extends java$lang$Object {
  nativeObject = null;

  entrySet = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Properties$EntrySet,
        'java.util.Properties$EntrySet',
         [java$util$Set,java$util$Properties$EntrySet,java$util$Collection,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$Set$(arg0) {
    var th = this;
    var var0 = null;
    java$lang$Object.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.entrySet = arg0;
    return;
  }

  Ljava$util$Iterator$$iterator$$() {
    var th = this;
    var var0 = null;
    var0 = (th.entrySet);
    return (var0.Ljava$util$Iterator$$iterator$$());
  }

  I$size$$() {
    var th = this;
    var var0 = null;
    var0 = (th.entrySet);
    return (var0.I$size$$());
  }

  Z$isEmpty$$() {
    var th = this;
    var var0 = null;
    var0 = (th.entrySet);
    return (var0.Z$isEmpty$$());
  }

  Ljava$lang$String$$toString$$() {
    var th = this;
    var var0 = null;
    var0 = (th.entrySet);
    return (var0.Ljava$lang$String$$toString$$());
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var phi1 = 0;
    If_3_0: {
     If_3_1: {
      if (arg0 == th) {
       break If_3_1;
      } else {
       var0 = (th.entrySet);
       if ((var0.Z$equals$Ljava$lang$Object$(arg0)) == 0) {
        phi1 = (0) | 0;
        break If_3_0;
       } else {
        break If_3_1;
       }
      }
     }
     phi1 = (1) | 0;
     break If_3_0;
    }
    return phi1;
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var0 = (th.entrySet);
    return (var0.I$hashCode$$());
  }
}


class java$lang$InternalError extends java$lang$VirtualMachineError {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$InternalError,
        'java.lang.InternalError',
         [java$lang$InternalError,java$lang$VirtualMachineError,java$lang$Throwable,java$lang$Error,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$VirtualMachineError.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$VirtualMachineError.prototype.V$$init$$$.call(th);
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    var th = this;
    java$lang$VirtualMachineError.prototype.V$$init$$Ljava$lang$Throwable$.call(th,arg0);
    return;
  }
}


class java$util$HashMap$TreeNode extends java$util$LinkedHashMap$Entry {
  nativeObject = null;

  prev = null;
  right = null;
  left = null;
  parent = null;
  red = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$HashMap$TreeNode,
        'java.util.HashMap$TreeNode',
         [java$util$LinkedHashMap$Entry,java$util$HashMap$TreeNode,java$util$Map$Entry,java$util$HashMap$Node,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    java$util$HashMap$TreeNode.$i;
    return;
  }

  V$split$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$I(arg0,arg1,arg2,arg3) {
    var th = this;
    var phi0 = null;
    var phi1 = null;
    var phi2 = null;
    var phi3 = null;
    var phi4 = 0;
    var phi5 = 0;
    var phi6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var var12 = null;
    var phi13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var phi17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = 0;
    var var22 = null;
    phi0 = null;
    phi1 = null;
    phi2 = null;
    phi3 = null;
    phi4 = (0) | 0;
    phi5 = (0) | 0;
    phi6 = th;
    L1495856202: while(true) {
     if (phi6 == null) {
      If_71_0: {
       if (phi0 == null) {
        break If_71_0;
       } else {
        if (phi4 > 6) {
         arg1.data[arg2] = phi0;
         if (phi2 == null) {
          break If_71_0;
         } else {
          phi0.V$treeify$$Ljava$util$HashMap$Node$(arg1);
          break If_71_0;
         }
        } else {
         var20 = phi0;
         arg1.data[arg2] = (var20.Ljava$util$HashMap$Node$$untreeify$Ljava$util$HashMap$(arg0));
         break If_71_0;
        }
       }
      }
      If_81_0: {
       if (phi2 == null) {
        break If_81_0;
       } else {
        if (phi5 > 6) {
         arg1.data[(arg2 + arg3)] = phi2;
         if (phi0 == null) {
          break If_81_0;
         } else {
          phi2.V$treeify$$Ljava$util$HashMap$Node$(arg1);
          break If_81_0;
         }
        } else {
         var21 = ((arg2 + arg3)) | 0;
         var22 = phi2;
         arg1.data[var21] = (var22.Ljava$util$HashMap$Node$$untreeify$Ljava$util$HashMap$(arg0));
         break If_81_0;
        }
       }
      }
      return;
     } else {
      var7 = (phi6.next);
      var8 = phi6;
      var8.next = null;
      If_32_0: {
       if (((phi6.hash) & arg3) != 0) {
        var15 = phi6;
        var16 = phi3;
        var15.prev = var16;
        If_59_0: {
         if (var16 != null) {
          var19 = phi3;
          var19.next = phi6;
          phi17 = phi2;
          break If_59_0;
         } else {
          phi17 = phi6;
          break If_59_0;
         }
        }
        var18 = phi6;
        phi5 = ((phi5 + 1)) | 0;
        phi11 = phi0;
        phi13 = phi1;
        phi2 = phi17;
        phi3 = var18;
        break If_32_0;
       } else {
        var9 = phi6;
        var10 = phi1;
        var9.prev = var10;
        If_40_0: {
         if (var10 != null) {
          var14 = phi1;
          var14.next = phi6;
          phi11 = phi0;
          break If_40_0;
         } else {
          phi11 = phi6;
          break If_40_0;
         }
        }
        var12 = phi6;
        phi4 = ((phi4 + 1)) | 0;
        phi13 = var12;
        break If_32_0;
       }
      }
      phi0 = phi11;
      phi1 = phi13;
      phi6 = var7;
      continue L1495856202;
     }
    }
  }

  Ljava$util$HashMap$Node$$untreeify$Ljava$util$HashMap$(arg0) {
    var th = this;
    var phi0 = null;
    var phi1 = null;
    var phi2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var var6 = null;
    var var7 = null;
    phi0 = null;
    phi1 = null;
    phi2 = th;
    L1053190754: while(true) {
     if (phi2 == null) {
      return phi0;
     } else {
      var3 = phi2;
      var4 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$replacementNode$Ljava$util$HashMap$Node$$Ljava$util$HashMap$Node$.call(arg0,var3,null));
      If_17_0: {
       if (phi1 != null) {
        var7 = phi1;
        var7.next = var4;
        phi5 = phi0;
        break If_17_0;
       } else {
        phi5 = var4;
        break If_17_0;
       }
      }
      var6 = (phi2.next);
      phi0 = phi5;
      phi1 = var4;
      phi2 = var6;
      continue L1053190754;
     }
    }
  }

  V$treeify$$Ljava$util$HashMap$Node$(arg0) {
    var th = this;
    var phi0 = null;
    var phi1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var phi7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var phi11 = null;
    var phi12 = null;
    var var13 = null;
    var var14 = 0;
    var phi15 = 0;
    var var16 = null;
    var phi17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var phi23 = null;
    var var24 = null;
    var var25 = 0;
    var var26 = 0;
    var var27 = null;
    phi0 = null;
    phi1 = th;
    L1310595430: while(true) {
     if (phi1 == null) {
      var27 = phi0;
      java$util$HashMap$TreeNode.$i;
      java$util$HashMap$TreeNode.V$moveRootToFront$$Ljava$util$HashMap$Node$$Ljava$util$HashMap$TreeNode$(arg0,var27);
      return;
     } else {
      var2 = (phi1.next);
      var3 = phi1;
      var4 = phi1;
      var4.right = null;
      var3.left = null;
      If_20_0: {
       if (phi0 != null) {
        var8 = (phi1.key);
        var9 = ((phi1.hash)) | 0;
        var10 = phi0;
        phi11 = null;
        phi12 = var10;
        L1339609364: while(true) {
         var13 = (phi12.key);
         var14 = ((phi12.hash)) | 0;
         If_50_0: {
          if (var14 <= var9) {
           if (var14 >= var9) {
            If_87_0: {
             If_87_1: {
              if (phi11 != null) {
               phi23 = phi11;
               break If_87_1;
              } else {
               var22 = (java$util$HashMap.Ljava$lang$Class$$comparableClassFor$Ljava$lang$Object$(var8));
               if (var22 == null) {
                phi23 = var22;
                break If_87_0;
               } else {
                phi23 = var22;
                break If_87_1;
               }
              }
             }
             var24 = phi23;
             var25 = ((java$util$HashMap.I$compareComparables$Ljava$lang$Class$$Ljava$lang$Object$$Ljava$lang$Object$(var24,var8,var13))) | 0;
             if (var25 != 0) {
              phi11 = phi23;
              phi15 = (var25) | 0;
              break If_50_0;
             } else {
              break If_87_0;
             }
            }
            java$util$HashMap$TreeNode.$i;
            var26 = ((java$util$HashMap$TreeNode.I$tieBreakOrder$Ljava$lang$Object$$Ljava$lang$Object$(var8,var13))) | 0;
            phi11 = phi23;
            phi15 = (var26) | 0;
            break If_50_0;
           } else {
            phi15 = (1) | 0;
            break If_50_0;
           }
          } else {
           phi15 = (-1) | 0;
           break If_50_0;
          }
         }
         var16 = phi12;
         If_57_0: {
          if (phi15 > 0) {
           phi17 = (phi12.right);
           break If_57_0;
          } else {
           phi17 = (phi12.left);
           break If_57_0;
          }
         }
         var18 = phi17;
         if (phi17 != null) {
          phi12 = var18;
          continue L1339609364;
         } else {
          var19 = phi1;
          var19.parent = var16;
          If_70_0: {
           if (phi15 > 0) {
            var16.right = phi1;
            break If_70_0;
           } else {
            var16.left = phi1;
            break If_70_0;
           }
          }
          var20 = phi0;
          var21 = phi1;
          java$util$HashMap$TreeNode.$i;
          phi7 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$balanceInsertion$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var20,var21));
          break If_20_0;
         }
        }
       } else {
        var5 = phi1;
        var5.parent = null;
        var6 = phi1;
        var6.red = 0;
        phi7 = phi1;
        break If_20_0;
       }
      }
      phi0 = phi7;
      phi1 = var2;
      continue L1310595430;
     }
    }
  }

  static Ljava$util$HashMap$TreeNode$$balanceInsertion$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(arg0,arg1) {
    var var0 = null;
    var phi1 = null;
    var phi2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var phi14 = null;
    var phi15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var phi24 = null;
    var phi25 = null;
    var phi26 = null;
    var phi27 = null;
    var phi28 = null;
    var var29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = null;
    var var33 = null;
    var0 = arg1;
    var0.red = 1;
    phi1 = arg0;
    phi2 = arg1;
    L483244882: while(true) {
     var3 = (phi2.parent);
     if (var3 != null) {
      If_21_0: {
       if ((var3.red) == 0) {
        break If_21_0;
       } else {
        var5 = (var3.parent);
        if (var5 != null) {
         var6 = (var5.left);
         if (var3 != var6) {
          If_96_0: {
           if (var6 == null) {
            break If_96_0;
           } else {
            if ((var6.red) == 0) {
             break If_96_0;
            } else {
             var6.red = 0;
             var3.red = 0;
             var5.red = 1;
             phi2 = var5;
             continue L483244882;
            }
           }
          }
          If_110_0: {
           if (phi2 != (var3.left)) {
            phi24 = phi1;
            phi25 = phi2;
            phi26 = var3;
            phi28 = var5;
            break If_110_0;
           } else {
            var21 = phi1;
            java$util$HashMap$TreeNode.$i;
            var22 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$rotateRight$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var21,var3));
            var23 = (var3.parent);
            If_121_0: {
             if (var23 != null) {
              var33 = (var23.parent);
              phi24 = var22;
              phi25 = var3;
              phi26 = var23;
              phi27 = var33;
              break If_121_0;
             } else {
              phi24 = var22;
              phi25 = var3;
              phi26 = var23;
              phi27 = null;
              break If_121_0;
             }
            }
            phi28 = phi27;
            break If_110_0;
           }
          }
          if (phi26 == null) {
           phi1 = phi24;
           phi2 = phi25;
           continue L483244882;
          } else {
           var29 = phi26;
           var29.red = 0;
           if (phi28 == null) {
            phi1 = phi24;
            phi2 = phi25;
            continue L483244882;
           } else {
            var30 = phi28;
            var30.red = 1;
            var31 = phi24;
            var32 = phi28;
            java$util$HashMap$TreeNode.$i;
            phi1 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$rotateLeft$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var31,var32));
            phi2 = phi25;
            continue L483244882;
           }
          }
         } else {
          var7 = (var5.right);
          If_39_0: {
           if (var7 == null) {
            break If_39_0;
           } else {
            if ((var7.red) == 0) {
             break If_39_0;
            } else {
             var7.red = 0;
             var3.red = 0;
             var5.red = 1;
             phi2 = var5;
             continue L483244882;
            }
           }
          }
          If_53_0: {
           if (phi2 != (var3.right)) {
            phi11 = phi1;
            phi12 = phi2;
            phi13 = var3;
            phi15 = var5;
            break If_53_0;
           } else {
            var8 = phi1;
            java$util$HashMap$TreeNode.$i;
            var9 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$rotateLeft$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var8,var3));
            var10 = (var3.parent);
            If_65_0: {
             if (var10 != null) {
              var20 = (var10.parent);
              phi11 = var9;
              phi12 = var3;
              phi13 = var10;
              phi14 = var20;
              break If_65_0;
             } else {
              phi11 = var9;
              phi12 = var3;
              phi13 = var10;
              phi14 = null;
              break If_65_0;
             }
            }
            phi15 = phi14;
            break If_53_0;
           }
          }
          if (phi13 == null) {
           phi1 = phi11;
           phi2 = phi12;
           continue L483244882;
          } else {
           var16 = phi13;
           var16.red = 0;
           if (phi15 == null) {
            phi1 = phi11;
            phi2 = phi12;
            continue L483244882;
           } else {
            var17 = phi15;
            var17.red = 1;
            var18 = phi11;
            var19 = phi15;
            java$util$HashMap$TreeNode.$i;
            phi1 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$rotateRight$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var18,var19));
            phi2 = phi12;
            continue L483244882;
           }
          }
         }
        } else {
         break If_21_0;
        }
       }
      }
      return phi1;
     } else {
      var4 = phi2;
      var4.red = 0;
      return phi2;
     }
    }
  }

  static Ljava$util$HashMap$TreeNode$$rotateLeft$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(arg0,arg1) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var phi6 = null;
    var var7 = null;
    If_3_0: {
     if (arg1 == null) {
      phi6 = arg0;
      break If_3_0;
     } else {
      var0 = (arg1.right);
      if (var0 == null) {
       phi6 = arg0;
       break If_3_0;
      } else {
       var1 = arg1;
       var2 = (var0.left);
       var1.right = var2;
       If_16_0: {
        if (var2 == null) {
         break If_16_0;
        } else {
         var2.parent = arg1;
         break If_16_0;
        }
       }
       var3 = var0;
       var4 = (arg1.parent);
       var3.parent = var4;
       If_26_0: {
        if (var4 != null) {
         if ((var4.left) != arg1) {
          var4.right = var0;
          phi6 = arg0;
          break If_26_0;
         } else {
          var4.left = var0;
          phi6 = arg0;
          break If_26_0;
         }
        } else {
         var0.red = 0;
         phi6 = var5;
         break If_26_0;
        }
       }
       var0.left = arg1;
       var7 = arg1;
       var7.parent = var0;
       break If_3_0;
      }
     }
    }
    return phi6;
  }

  static Ljava$util$HashMap$TreeNode$$rotateRight$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(arg0,arg1) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var phi6 = null;
    var var7 = null;
    If_3_0: {
     if (arg1 == null) {
      phi6 = arg0;
      break If_3_0;
     } else {
      var0 = (arg1.left);
      if (var0 == null) {
       phi6 = arg0;
       break If_3_0;
      } else {
       var1 = arg1;
       var2 = (var0.right);
       var1.left = var2;
       If_16_0: {
        if (var2 == null) {
         break If_16_0;
        } else {
         var2.parent = arg1;
         break If_16_0;
        }
       }
       var3 = var0;
       var4 = (arg1.parent);
       var3.parent = var4;
       If_26_0: {
        if (var4 != null) {
         if ((var4.right) != arg1) {
          var4.left = var0;
          phi6 = arg0;
          break If_26_0;
         } else {
          var4.right = var0;
          phi6 = arg0;
          break If_26_0;
         }
        } else {
         var0.red = 0;
         phi6 = var5;
         break If_26_0;
        }
       }
       var0.right = arg1;
       var7 = arg1;
       var7.parent = var0;
       break If_3_0;
      }
     }
    }
    return phi6;
  }

  static I$tieBreakOrder$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var phi6 = 0;
    var phi7 = 0;
    If_3_0: {
     If_3_1: {
      if (arg0 == null) {
       break If_3_1;
      } else {
       if (arg1 == null) {
        break If_3_1;
       } else {
        var0 = ((arg0).constructor.$rt);
        var1 = (java$lang$Class.prototype.Ljava$lang$String$$getName$$.call(var0));
        var2 = ((arg1).constructor.$rt);
        var3 = (java$lang$Class.prototype.Ljava$lang$String$$getName$$.call(var2));
        var4 = ((java$lang$String.prototype.I$compareTo$Ljava$lang$String$.call(var1,var3))) | 0;
        if (var4 != 0) {
         phi7 = (var4) | 0;
         break If_3_0;
        } else {
         break If_3_1;
        }
       }
      }
     }
     java$lang$System.$i;
     var5 = ((java$lang$System.I$identityHashCode$Ljava$lang$Object$(arg0))) | 0;
     If_32_0: {
      if (var5 > (java$lang$System.I$identityHashCode$Ljava$lang$Object$(arg1))) {
       phi6 = (1) | 0;
       break If_32_0;
      } else {
       phi6 = (-1) | 0;
       break If_32_0;
      }
     }
     phi7 = (phi6) | 0;
     break If_3_0;
    }
    return phi7;
  }

  static V$moveRootToFront$$Ljava$util$HashMap$Node$$Ljava$util$HashMap$TreeNode$(arg0,arg1) {
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    If_3_0: {
     if (arg1 == null) {
      break If_3_0;
     } else {
      if (arg0 == null) {
       break If_3_0;
      } else {
       var0 = (arg0.data.length) | 0;
       if (var0 <= 0) {
        break If_3_0;
       } else {
        var1 = (((var0 - 1) & (arg1.hash))) | 0;
        var2 = (arg0.data[var1]);
        If_23_0: {
         if (arg1 == var2) {
          break If_23_0;
         } else {
          arg0.data[var1] = arg1;
          var3 = (arg1.prev);
          var4 = (arg1.next);
          If_32_0: {
           if (var4 == null) {
            break If_32_0;
           } else {
            var5 = var4;
            var5.prev = var3;
            break If_32_0;
           }
          }
          If_39_0: {
           if (var3 == null) {
            break If_39_0;
           } else {
            var3.next = var4;
            break If_39_0;
           }
          }
          If_43_0: {
           if (var2 == null) {
            break If_43_0;
           } else {
            var2.prev = arg1;
            break If_43_0;
           }
          }
          var6 = arg1;
          var6.next = var2;
          var7 = arg1;
          var7.prev = null;
          break If_23_0;
         }
        }
        java$util$HashMap$TreeNode.$i;
        break If_3_0;
       }
      }
     }
    }
    return;
  }

  static Z$checkInvariants$Ljava$util$HashMap$TreeNode$(arg0) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = (arg0.parent);
    var1 = (arg0.left);
    var2 = (arg0.right);
    var3 = (arg0.prev);
    var4 = (arg0.next);
    If_18_0: {
     if (var3 == null) {
      break If_18_0;
     } else {
      if ((var3.next) == arg0) {
       break If_18_0;
      } else {
       return 0;
      }
     }
    }
    If_26_0: {
     if (var4 == null) {
      break If_26_0;
     } else {
      if ((var4.prev) == arg0) {
       break If_26_0;
      } else {
       return 0;
      }
     }
    }
    If_34_0: {
     if (var0 == null) {
      break If_34_0;
     } else {
      if (arg0 == (var0.left)) {
       break If_34_0;
      } else {
       if (arg0 == (var0.right)) {
        break If_34_0;
       } else {
        return 0;
       }
      }
     }
    }
    If_45_0: {
     if (var1 == null) {
      break If_45_0;
     } else {
      If_48_0: {
       if ((var1.parent) != arg0) {
        break If_48_0;
       } else {
        if ((var1.hash) <= (arg0.hash)) {
         break If_45_0;
        } else {
         break If_48_0;
        }
       }
      }
      return 0;
     }
    }
    If_58_0: {
     if (var2 == null) {
      break If_58_0;
     } else {
      If_61_0: {
       if ((var2.parent) != arg0) {
        break If_61_0;
       } else {
        if ((var2.hash) >= (arg0.hash)) {
         break If_58_0;
        } else {
         break If_61_0;
        }
       }
      }
      return 0;
     }
    }
    If_72_0: {
     if ((arg0.red) == 0) {
      break If_72_0;
     } else {
      if (var1 == null) {
       break If_72_0;
      } else {
       if ((var1.red) == 0) {
        break If_72_0;
       } else {
        if (var2 == null) {
         break If_72_0;
        } else {
         if ((var2.red) == 0) {
          break If_72_0;
         } else {
          return 0;
         }
        }
       }
      }
     }
    }
    If_90_0: {
     if (var1 == null) {
      break If_90_0;
     } else {
      java$util$HashMap$TreeNode.$i;
      if ((java$util$HashMap$TreeNode.Z$checkInvariants$Ljava$util$HashMap$TreeNode$(var1)) != 0) {
       break If_90_0;
      } else {
       return 0;
      }
     }
    }
    If_101_0: {
     if (var2 == null) {
      break If_101_0;
     } else {
      java$util$HashMap$TreeNode.$i;
      if ((java$util$HashMap$TreeNode.Z$checkInvariants$Ljava$util$HashMap$TreeNode$(var2)) != 0) {
       break If_101_0;
      } else {
       return 0;
      }
     }
    }
    return 1;
  }

  Ljava$util$HashMap$TreeNode$$getTreeNode$I$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var phi0 = null;
    If_5_0: {
     if ((th.parent) == null) {
      phi0 = th;
      break If_5_0;
     } else {
      phi0 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$root$$.call(th));
      break If_5_0;
     }
    }
    return (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$.call(phi0,arg0,arg1,null));
  }

  Ljava$util$HashMap$TreeNode$$root$$() {
    var th = this;
    var phi0 = null;
    var var1 = null;
    phi0 = th;
    L1942789934: while(true) {
     var1 = (phi0.parent);
     if (var1 != null) {
      phi0 = var1;
      continue L1942789934;
     } else {
      return phi0;
     }
    }
  }

  Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$(arg0,arg1,arg2) {
    var th = this;
    var phi0 = null;
    var phi1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var phi5 = null;
    var var6 = null;
    var var7 = null;
    var phi8 = null;
    var var9 = null;
    var var10 = 0;
    var phi11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    phi0 = arg2;
    phi1 = th;
    L1504314078: while(true) {
     var2 = (phi1.left);
     var3 = (phi1.right);
     var4 = ((phi1.hash)) | 0;
     If_17_0: {
      if (var4 <= arg0) {
       if (var4 >= arg0) {
        var6 = (phi1.key);
        If_30_0: {
         if (var6 == arg1) {
          break If_30_0;
         } else {
          If_32_0: {
           if (arg1 == null) {
            break If_32_0;
           } else {
            if ((arg1.Z$equals$Ljava$lang$Object$(var6)) == 0) {
             break If_32_0;
            } else {
             break If_30_0;
            }
           }
          }
          if (var2 != null) {
           if (var3 != null) {
            If_45_0: {
             If_45_1: {
              if (phi0 != null) {
               phi8 = phi0;
               break If_45_1;
              } else {
               var7 = (java$util$HashMap.Ljava$lang$Class$$comparableClassFor$Ljava$lang$Object$(arg1));
               if (var7 == null) {
                phi8 = var7;
                break If_45_0;
               } else {
                phi8 = var7;
                break If_45_1;
               }
              }
             }
             var9 = phi8;
             var10 = ((java$util$HashMap.I$compareComparables$Ljava$lang$Class$$Ljava$lang$Object$$Ljava$lang$Object$(var9,arg1,var6))) | 0;
             if (var10 == 0) {
              break If_45_0;
             } else {
              If_63_0: {
               if (var10 >= 0) {
                phi11 = var3;
                break If_63_0;
               } else {
                phi11 = var2;
                break If_63_0;
               }
              }
              var12 = phi11;
              phi0 = phi8;
              phi5 = var12;
              break If_17_0;
             }
            }
            var13 = phi8;
            var14 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$.call(var3,arg0,arg1,var13));
            if (var14 == null) {
             phi0 = phi8;
             phi5 = var2;
             break If_17_0;
            } else {
             return var14;
            }
           } else {
            phi5 = var2;
            break If_17_0;
           }
          } else {
           phi5 = var3;
           break If_17_0;
          }
         }
        }
        return phi1;
       } else {
        phi5 = var3;
        break If_17_0;
       }
      } else {
       phi5 = var2;
       break If_17_0;
      }
     }
     if (phi5 != null) {
      phi1 = phi5;
      continue L1504314078;
     } else {
      return null;
     }
    }
  }

  Ljava$util$HashMap$TreeNode$$putTreeVal$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1,arg2,arg3,arg4) {
    var th = this;
    var var0 = null;
    var phi1 = null;
    var phi2 = 0;
    var phi3 = null;
    var var4 = null;
    var phi5 = null;
    var var6 = 0;
    var phi7 = 0;
    var var8 = null;
    var phi9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var phi17 = null;
    var var18 = null;
    var var19 = 0;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var phi23 = 0;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var phi27 = null;
    var phi28 = null;
    var phi29 = null;
    var var30 = 0;
    If_10_0: {
     if ((th.parent) == null) {
      phi1 = null;
      phi2 = (0) | 0;
      phi3 = th;
      break If_10_0;
     } else {
      var0 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$root$$.call(th));
      phi1 = null;
      phi2 = (0) | 0;
      phi3 = var0;
      break If_10_0;
     }
    }
    var4 = phi3;
    phi5 = var4;
    L310345635: while(true) {
     var6 = ((phi5.hash)) | 0;
     If_26_0: {
      if (var6 <= arg2) {
       if (var6 >= arg2) {
        var15 = (phi5.key);
        If_80_0: {
         if (var15 == arg3) {
          break If_80_0;
         } else {
          If_82_0: {
           if (arg3 == null) {
            break If_82_0;
           } else {
            if ((arg3.Z$equals$Ljava$lang$Object$(var15)) == 0) {
             break If_82_0;
            } else {
             break If_80_0;
            }
           }
          }
          If_91_0: {
           If_91_1: {
            if (phi1 != null) {
             phi17 = phi1;
             break If_91_1;
            } else {
             var16 = (java$util$HashMap.Ljava$lang$Class$$comparableClassFor$Ljava$lang$Object$(arg3));
             if (var16 == null) {
              phi17 = var16;
              break If_91_0;
             } else {
              phi17 = var16;
              break If_91_1;
             }
            }
           }
           var18 = phi17;
           var19 = ((java$util$HashMap.I$compareComparables$Ljava$lang$Class$$Ljava$lang$Object$$Ljava$lang$Object$(var18,arg3,var15))) | 0;
           if (var19 != 0) {
            phi1 = phi17;
            phi7 = (var19) | 0;
            break If_26_0;
           } else {
            break If_91_0;
           }
          }
          If_110_0: {
           if (phi2 != 0) {
            phi23 = (phi2) | 0;
            break If_110_0;
           } else {
            var20 = (phi5.left);
            If_117_0: {
             If_117_1: {
              if (var20 == null) {
               phi23 = (1) | 0;
               break If_117_1;
              } else {
               var21 = phi17;
               var22 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$.call(var20,arg2,arg3,var21));
               if (var22 != null) {
                phi23 = (1) | 0;
                phi27 = var22;
                phi28 = var20;
                break If_117_0;
               } else {
                phi23 = (1) | 0;
                break If_117_1;
               }
              }
             }
             var24 = (phi5.right);
             if (var24 == null) {
              phi29 = var22;
              break If_110_0;
             } else {
              var25 = phi17;
              var26 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$.call(var24,arg2,arg3,var25));
              if (var26 == null) {
               phi29 = var26;
               break If_110_0;
              } else {
               phi27 = var26;
               phi28 = var24;
               break If_117_0;
              }
             }
            }
            return phi27;
           }
          }
          java$util$HashMap$TreeNode.$i;
          var30 = ((java$util$HashMap$TreeNode.I$tieBreakOrder$Ljava$lang$Object$$Ljava$lang$Object$(arg3,var15))) | 0;
          phi1 = phi17;
          phi2 = (phi23) | 0;
          phi7 = (var30) | 0;
          break If_26_0;
         }
        }
        return phi5;
       } else {
        phi7 = (1) | 0;
        break If_26_0;
       }
      } else {
       phi7 = (-1) | 0;
       break If_26_0;
      }
     }
     var8 = phi5;
     If_33_0: {
      if (phi7 > 0) {
       phi9 = (phi5.right);
       break If_33_0;
      } else {
       phi9 = (phi5.left);
       break If_33_0;
      }
     }
     var10 = phi9;
     if (phi9 != null) {
      phi5 = var10;
      continue L310345635;
     } else {
      var11 = (var8.next);
      var12 = (java$util$HashMap.prototype.Ljava$util$HashMap$TreeNode$$newTreeNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(arg0,arg2,arg3,arg4,var11));
      If_49_0: {
       if (phi7 > 0) {
        var8.right = var12;
        break If_49_0;
       } else {
        var8.left = var12;
        break If_49_0;
       }
      }
      var8.next = var12;
      var13 = var12;
      var12.prev = var8;
      var13.parent = var8;
      If_59_0: {
       if (var11 == null) {
        break If_59_0;
       } else {
        var14 = var11;
        var14.prev = var12;
        break If_59_0;
       }
      }
      java$util$HashMap$TreeNode.$i;
      java$util$HashMap$TreeNode.V$moveRootToFront$$Ljava$util$HashMap$Node$$Ljava$util$HashMap$TreeNode$(arg1,(java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$balanceInsertion$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var4,var12)));
      return null;
     }
    }
  }

  V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    var th = this;
    java$util$LinkedHashMap$Entry.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(th,arg0,arg1,arg2,arg3);
    return;
  }
}


class java$nio$BufferOverflowException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$BufferOverflowException,
        'java.nio.BufferOverflowException',
         [java$lang$Exception,java$nio$BufferOverflowException,java$lang$Throwable,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$RuntimeException.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$Collections$EmptySet extends java$util$AbstractSet {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Collections$EmptySet,
        'java.util.Collections$EmptySet',
         [java$util$AbstractCollection,java$util$Set,java$util$AbstractSet,java$util$Collection,java$util$Collections$EmptySet,java$io$Serializable,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$util$AbstractSet.prototype.V$$init$$$.call(th);
    return;
  }

  I$hashCode$$() {
    return 0;
  }

  Ljava$util$Iterator$$iterator$$() {
    java$util$Collections.$i;
    return (java$util$Collections.Ljava$util$Iterator$$emptyIterator$$());
  }

  I$size$$() {
    return 0;
  }

  Z$containsAll$Ljava$util$Collection$(arg0) {
    return (arg0.Z$isEmpty$$());
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    return 0;
  }

  Z$isEmpty$$() {
    return 1;
  }
}


class java$util$ImmutableCollections$AbstractImmutableSet extends java$util$ImmutableCollections$AbstractImmutableCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$AbstractImmutableSet,
        'java.util.ImmutableCollections$AbstractImmutableSet',
         [java$util$AbstractCollection,java$util$Set,java$util$Collection,java$util$ImmutableCollections$AbstractImmutableSet,java$util$ImmutableCollections$AbstractImmutableCollection,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$util$ImmutableCollections$AbstractImmutableCollection.prototype.V$$init$$$.call(th);
    return;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    if (arg0 != th) {
     if (bytecoder.instanceOf(arg0,java$util$Set) != 0) {
      var0 = arg0;
      var1 = ((var0.I$size$$())) | 0;
      if (var1 == (th.I$size$$())) {
       var2 = (var0.Ljava$util$Iterator$$iterator$$());
       L2062174200: while(true) {
        if ((var2.Z$hasNext$$()) == 0) {
         return 1;
        } else {
         var3 = (var2.Ljava$lang$Object$$next$$());
         If_36_0: {
          if (var3 == null) {
           break If_36_0;
          } else {
           if ((th.Z$contains$Ljava$lang$Object$(var3)) != 0) {
            // Here was a goto statement
            continue L2062174200;
           } else {
            break If_36_0;
           }
          }
         }
         return 0;
        }
       }
      } else {
       return 0;
      }
     } else {
      return 0;
     }
    } else {
     return 1;
    }
  }
}


class java$util$ImmutableCollections$MapN$1 extends java$util$AbstractSet {
  nativeObject = null;

  this$0 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$MapN$1,
        'java.util.ImmutableCollections$MapN$1',
         [java$util$AbstractCollection,java$util$ImmutableCollections$MapN$1,java$util$Set,java$util$AbstractSet,java$util$Collection,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$ImmutableCollections$MapN$(arg0) {
    var th = this;
    var var0 = null;
    var0 = th;
    var0.this$0 = arg0;
    java$util$AbstractSet.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$util$Iterator$$iterator$$() {
    var th = this;
    var var0 = null;
    var0 = new java$util$ImmutableCollections$MapN$MapNIterator();
    java$util$ImmutableCollections$MapN$MapNIterator.prototype.V$$init$$Ljava$util$ImmutableCollections$MapN$.call(var0,(th.this$0));
    return var0;
  }

  I$size$$() {
    var th = this;
    return ((th.this$0).size);
  }
}


class java$lang$ArrayIndexOutOfBoundsException extends java$lang$IndexOutOfBoundsException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$ArrayIndexOutOfBoundsException,
        'java.lang.ArrayIndexOutOfBoundsException',
         [java$lang$IndexOutOfBoundsException,java$lang$Exception,java$lang$Throwable,java$lang$RuntimeException,java$lang$ArrayIndexOutOfBoundsException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$util$ArrayList extends java$util$AbstractList {
  nativeObject = null;

  static EMPTY_ELEMENTDATA = null;
  static DEFAULTCAPACITY_EMPTY_ELEMENTDATA = null;
  elementData = null;
  size = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ArrayList,
        'java.util.ArrayList',
         [java$util$AbstractCollection,java$util$ArrayList,java$util$List,java$util$RandomAccess,java$util$Collection,java$util$AbstractList,java$lang$Iterable,java$io$Serializable,java$lang$Cloneable,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var0 = bytecoder.newarray((0),null);
    java$util$ArrayList.$i;
    java$util$ArrayList.EMPTY_ELEMENTDATA = var0;
    java$util$ArrayList.DEFAULTCAPACITY_EMPTY_ELEMENTDATA = bytecoder.newarray((0),null);
    return;
  }

  V$$init$$$() {
    var th = this;
    var var0 = null;
    java$util$AbstractList.prototype.V$$init$$$.call(th);
    var0 = th;
    java$util$ArrayList.$i;
    var0.elementData = (java$util$ArrayList.DEFAULTCAPACITY_EMPTY_ELEMENTDATA);
    return;
  }

  V$clear$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var phi4 = 0;
    var0 = th;
    var0.modCount = ((var0.modCount) + 1);
    var1 = (th.elementData);
    var2 = ((th.size)) | 0;
    var3 = th;
    var3.size = 0;
    phi4 = (0) | 0;
    L574400156: while(true) {
     if (phi4 >= var2) {
      return;
     } else {
      var1.data[phi4] = null;
      phi4 = ((phi4 + 1)) | 0;
      // Here was a goto statement
      continue L574400156;
     }
    }
  }

  Z$add$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var0 = th;
    var0.modCount = ((var0.modCount) + 1);
    java$util$ArrayList.prototype.V$add$Ljava$lang$Object$$$Ljava$lang$Object$$I.call(th,arg0,(th.elementData),(th.size));
    return 1;
  }

  V$add$Ljava$lang$Object$$$Ljava$lang$Object$$I(arg0,arg1,arg2) {
    var th = this;
    var phi0 = null;
    var var1 = null;
    If_6_0: {
     if (arg2 != arg1.data.length) {
      phi0 = arg1;
      break If_6_0;
     } else {
      phi0 = (java$util$ArrayList.prototype.$Ljava$lang$Object$$grow$$.call(th));
      break If_6_0;
     }
    }
    phi0.data[arg2] = arg0;
    var1 = th;
    var1.size = (arg2 + 1);
    return;
  }

  $Ljava$lang$Object$$grow$$() {
    var th = this;
    var var0 = 0;
    var0 = (((th.size) + 1)) | 0;
    return (java$util$ArrayList.prototype.$Ljava$lang$Object$$grow$I.call(th,var0));
  }

  $Ljava$lang$Object$$grow$I(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var0 = ((th.elementData).data.length) | 0;
    If_7_0: {
     if (var0 > 0) {
      break If_7_0;
     } else {
      var1 = (th.elementData);
      java$util$ArrayList.$i;
      if (var1 == (java$util$ArrayList.DEFAULTCAPACITY_EMPTY_ELEMENTDATA)) {
       var8 = th;
       java$lang$Math.$i;
       var9 = bytecoder.newarray(((java$lang$Math.I$max$I$I(10,arg0))),null);
       var8.elementData = var9;
       return var9;
      } else {
       break If_7_0;
      }
     }
    }
    var2 = ((arg0 - var0)) | 0;
    var3 = ((var0 >> 1)) | 0;
    jdk$internal$util$ArraysSupport.$i;
    var4 = ((jdk$internal$util$ArraysSupport.I$newLength$I$I$I(var0,var2,var3))) | 0;
    var5 = th;
    var6 = (th.elementData);
    java$util$Arrays.$i;
    var7 = (java$util$Arrays.$Ljava$lang$Object$$copyOf$$Ljava$lang$Object$$I(var6,var4));
    var5.elementData = var7;
    return var7;
  }

  I$size$$() {
    var th = this;
    return (th.size);
  }

  Ljava$lang$Object$$get$I(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var0 = ((th.size)) | 0;
    var1 = ((java$util$Objects.I$checkIndex$I$I(arg0,var0))) | 0;
    return (java$util$ArrayList.prototype.Ljava$lang$Object$$elementData$I.call(th,arg0));
  }

  Ljava$lang$Object$$elementData$I(arg0) {
    var th = this;
    return ((th.elementData).data[arg0]);
  }

  Ljava$lang$Object$$set$I$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = ((th.size)) | 0;
    var1 = ((java$util$Objects.I$checkIndex$I$I(arg0,var0))) | 0;
    var2 = (java$util$ArrayList.prototype.Ljava$lang$Object$$elementData$I.call(th,arg0));
    (th.elementData).data[arg0] = arg1;
    return var2;
  }

  $Ljava$lang$Object$$toArray$$() {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var0 = (th.elementData);
    var1 = ((th.size)) | 0;
    java$util$Arrays.$i;
    return (java$util$Arrays.$Ljava$lang$Object$$copyOf$$Ljava$lang$Object$$I(var0,var1));
  }

  Ljava$util$ListIterator$$listIterator$$() {
    var th = this;
    var var0 = null;
    var0 = new java$util$ArrayList$ListItr();
    java$util$ArrayList$ListItr.prototype.V$$init$$Ljava$util$ArrayList$$I.call(var0,th,0);
    return var0;
  }

  V$add$I$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var phi3 = null;
    var var4 = null;
    java$util$ArrayList.prototype.V$rangeCheckForAdd$I.call(th,arg0);
    var0 = th;
    var0.modCount = ((var0.modCount) + 1);
    var1 = ((th.size)) | 0;
    var2 = (th.elementData);
    If_18_0: {
     if (var1 != var2.data.length) {
      phi3 = var2;
      break If_18_0;
     } else {
      phi3 = (java$util$ArrayList.prototype.$Ljava$lang$Object$$grow$$.call(th));
      break If_18_0;
     }
    }
    java$lang$System.V$arraycopy$Ljava$lang$Object$$I$Ljava$lang$Object$$I$I(phi3,arg0,phi3,(arg0 + 1),(var1 - arg0));
    phi3.data[arg0] = arg1;
    var4 = th;
    var4.size = (var1 + 1);
    return;
  }

  V$rangeCheckForAdd$I(arg0) {
    var th = this;
    var var0 = null;
    If_4_0: {
     if (arg0 > (th.size)) {
      break If_4_0;
     } else {
      if (arg0 >= 0) {
       return;
      } else {
       break If_4_0;
      }
     }
    }
    var0 = new java$lang$IndexOutOfBoundsException();
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var0,(java$util$ArrayList.prototype.Ljava$lang$String$$outOfBoundsMsg$I.call(th,arg0)));
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  Ljava$lang$String$$outOfBoundsMsg$I(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var0,bytecoder.stringconstants[88]));
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var1,arg0));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[94]));
    var4 = ((th.size)) | 0;
    var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var3,var4));
    return (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var5));
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = null;
    var phi2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = 0;
    if (arg0 != th) {
     if (bytecoder.instanceOf(arg0,java$util$List) != 0) {
      var0 = ((th.modCount)) | 0;
      If_20_0: {
       if (((arg0).constructor.$rt) != java$util$ArrayList.$rt) {
        var4 = arg0;
        var5 = ((th.size)) | 0;
        phi2 = (java$util$ArrayList.prototype.Z$equalsRange$Ljava$util$List$$I$I.call(th,var4,0,var5));
        break If_20_0;
       } else {
        var1 = arg0;
        phi2 = (java$util$ArrayList.prototype.Z$equalsArrayList$Ljava$util$ArrayList$.call(th,var1));
        break If_20_0;
       }
      }
      var3 = phi2;
      java$util$ArrayList.prototype.V$checkForComodification$I.call(th,var0);
      return var3;
     } else {
      return 0;
     }
    } else {
     return 1;
    }
  }

  Z$equalsArrayList$Ljava$util$ArrayList$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var phi7 = 0;
    var var8 = null;
    var var9 = null;
    var phi10 = 0;
    var0 = ((arg0.modCount)) | 0;
    var1 = ((th.size)) | 0;
    If_10_0: {
     if (var1 != (arg0.size)) {
      phi2 = (0) | 0;
      break If_10_0;
     } else {
      phi2 = (1) | 0;
      break If_10_0;
     }
    }
    var3 = (phi2) | 0;
    If_17_0: {
     if (phi2 == 0) {
      phi10 = (var3) | 0;
      break If_17_0;
     } else {
      var4 = (arg0.elementData);
      var5 = (th.elementData);
      If_27_0: {
       if (var1 > var5.data.length) {
        break If_27_0;
       } else {
        if (var1 <= var4.data.length) {
         phi7 = (0) | 0;
         L2142401661: while(true) {
          if (phi7 >= var1) {
           phi10 = (var3) | 0;
           break If_17_0;
          } else {
           var8 = (var5.data[phi7]);
           var9 = (var4.data[phi7]);
           if ((java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(var8,var9)) != 0) {
            phi7 = ((phi7 + 1)) | 0;
            // Here was a goto statement
            continue L2142401661;
           } else {
            phi10 = (0) | 0;
            break If_17_0;
           }
          }
         }
        } else {
         break If_27_0;
        }
       }
      }
      var6 = new java$util$ConcurrentModificationException();
      java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var6);
      throw bytecoder.registerStack(var6, new Error().stack);
     }
    }
    java$util$ArrayList.prototype.V$checkForComodification$I.call(arg0,var0);
    return phi10;
  }

  V$checkForComodification$I(arg0) {
    var th = this;
    var var0 = null;
    if ((th.modCount) == arg0) {
     return;
    } else {
     var0 = new java$util$ConcurrentModificationException();
     java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  Z$equalsRange$Ljava$util$List$$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var phi3 = 0;
    var var4 = null;
    var var5 = null;
    var phi6 = 0;
    var0 = (th.elementData);
    if (arg2 <= var0.data.length) {
     var2 = (arg0.Ljava$util$Iterator$$iterator$$());
     phi3 = (arg1) | 0;
     L1467835232: while(true) {
      if (phi3 >= arg2) {
       If_47_0: {
        if ((var2.Z$hasNext$$()) != 0) {
         phi6 = (0) | 0;
         break If_47_0;
        } else {
         phi6 = (1) | 0;
         break If_47_0;
        }
       }
       return phi6;
      } else {
       If_25_0: {
        if ((var2.Z$hasNext$$()) == 0) {
         break If_25_0;
        } else {
         var4 = (var0.data[phi3]);
         var5 = (var2.Ljava$lang$Object$$next$$());
         if ((java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(var4,var5)) != 0) {
          phi3 = ((phi3 + 1)) | 0;
          // Here was a goto statement
          continue L1467835232;
         } else {
          break If_25_0;
         }
        }
       }
       return 0;
      }
     }
    } else {
     var1 = new java$util$ConcurrentModificationException();
     java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  I$hashCode$$() {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var0 = ((th.modCount)) | 0;
    var1 = ((th.size)) | 0;
    var2 = ((java$util$ArrayList.prototype.I$hashCodeRange$I$I.call(th,0,var1))) | 0;
    java$util$ArrayList.prototype.V$checkForComodification$I.call(th,var0);
    return var2;
  }

  I$hashCodeRange$I$I(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var phi2 = 0;
    var phi3 = 0;
    var var4 = null;
    var var5 = 0;
    var phi6 = 0;
    var var7 = 0;
    var0 = (th.elementData);
    if (arg1 <= var0.data.length) {
     phi2 = (1) | 0;
     phi3 = (arg0) | 0;
     L1893577552: while(true) {
      if (phi3 >= arg1) {
       return phi2;
      } else {
       var4 = (var0.data[phi3]);
       var5 = ((31 * phi2)) | 0;
       If_29_0: {
        if (var4 != null) {
         phi6 = ((var4.I$hashCode$$())) | 0;
         break If_29_0;
        } else {
         phi6 = (0) | 0;
         break If_29_0;
        }
       }
       var7 = ((var5 + phi6)) | 0;
       phi3 = ((phi3 + 1)) | 0;
       phi2 = (var7) | 0;
       continue L1893577552;
      }
     }
    } else {
     var1 = new java$util$ConcurrentModificationException();
     java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  Ljava$util$Iterator$$iterator$$() {
    var th = this;
    var var0 = null;
    var0 = new java$util$ArrayList$Itr();
    java$util$ArrayList$Itr.prototype.V$$init$$Ljava$util$ArrayList$.call(var0,th);
    return var0;
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((java$util$ArrayList.prototype.I$indexOf$Ljava$lang$Object$.call(th,arg0)) < 0) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }

  I$indexOf$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = 0;
    var0 = ((th.size)) | 0;
    return (java$util$ArrayList.prototype.I$indexOfRange$Ljava$lang$Object$$I$I.call(th,arg0,0,var0));
  }

  I$indexOfRange$Ljava$lang$Object$$I$I(arg0,arg1,arg2) {
    var th = this;
    var var0 = null;
    var phi1 = 0;
    var phi2 = 0;
    var var3 = null;
    var0 = (th.elementData);
    If_8_0: {
     if (arg0 != null) {
      phi2 = (arg1) | 0;
      L1271199977: while(true) {
       if (phi2 >= arg2) {
        phi1 = (phi2) | 0;
        break If_8_0;
       } else {
        var3 = (var0.data[phi2]);
        if ((arg0.Z$equals$Ljava$lang$Object$(var3)) == 0) {
         phi2 = ((phi2 + 1)) | 0;
         // Here was a goto statement
         continue L1271199977;
        } else {
         return phi2;
        }
       }
      }
     } else {
      phi1 = (arg1) | 0;
      L1002673635: while(true) {
       if (phi1 >= arg2) {
        break If_8_0;
       } else {
        if ((var0.data[phi1]) != null) {
         phi1 = ((phi1 + 1)) | 0;
         // Here was a goto statement
         continue L1002673635;
        } else {
         return phi1;
        }
       }
      }
     }
    }
    return -1;
  }

  Z$isEmpty$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.size) != 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }

  Ljava$util$ListIterator$$listIterator$I(arg0) {
    var th = this;
    var var0 = null;
    java$util$ArrayList.prototype.V$rangeCheckForAdd$I.call(th,arg0);
    var0 = new java$util$ArrayList$ListItr();
    java$util$ArrayList$ListItr.prototype.V$$init$$Ljava$util$ArrayList$$I.call(var0,th,arg0);
    return var0;
  }
}


class java$io$FileWriter extends java$io$OutputStreamWriter {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$FileWriter,
        'java.io.FileWriter',
         [java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$OutputStreamWriter,java$io$Closeable,java$lang$AutoCloseable,java$io$FileWriter,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$Collections$EmptyList extends java$util$AbstractList {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$Collections$EmptyList,
        'java.util.Collections$EmptyList',
         [java$util$AbstractCollection,java$util$List,java$util$Collections$EmptyList,java$util$RandomAccess,java$util$Collection,java$util$AbstractList,java$io$Serializable,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$util$AbstractList.prototype.V$$init$$$.call(th);
    return;
  }

  V$clear$$() {
    return;
  }

  I$size$$() {
    return 0;
  }

  Ljava$lang$Object$$get$I(arg0) {
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = new java$lang$IndexOutOfBoundsException();
    var1 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var1);
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var1,bytecoder.stringconstants[88]));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var2,arg0));
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var0,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var3)));
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  $Ljava$lang$Object$$toArray$$() {
    return bytecoder.newarray((0),null);
  }

  Ljava$util$ListIterator$$listIterator$$() {
    java$util$Collections.$i;
    return (java$util$Collections.Ljava$util$ListIterator$$emptyListIterator$$());
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var var0 = null;
    var phi1 = 0;
    If_4_0: {
     If_4_1: {
      if (bytecoder.instanceOf(arg0,java$util$List) == 0) {
       break If_4_1;
      } else {
       var0 = arg0;
       if ((var0.Z$isEmpty$$()) == 0) {
        break If_4_1;
       } else {
        phi1 = (1) | 0;
        break If_4_0;
       }
      }
     }
     phi1 = (0) | 0;
     break If_4_0;
    }
    return phi1;
  }

  I$hashCode$$() {
    return 1;
  }

  Ljava$util$Iterator$$iterator$$() {
    java$util$Collections.$i;
    return (java$util$Collections.Ljava$util$Iterator$$emptyIterator$$());
  }

  Z$containsAll$Ljava$util$Collection$(arg0) {
    return (arg0.Z$isEmpty$$());
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    return 0;
  }

  Z$isEmpty$$() {
    return 1;
  }
}


class java$util$HashMap$EntrySet extends java$util$AbstractSet {
  nativeObject = null;

  this$0 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$HashMap$EntrySet,
        'java.util.HashMap$EntrySet',
         [java$util$AbstractCollection,java$util$Set,java$util$AbstractSet,java$util$Collection,java$util$HashMap$EntrySet,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$HashMap$(arg0) {
    var th = this;
    var var0 = null;
    var0 = th;
    var0.this$0 = arg0;
    java$util$AbstractSet.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$util$Iterator$$iterator$$() {
    var th = this;
    var var0 = null;
    var0 = new java$util$HashMap$EntryIterator();
    java$util$HashMap$EntryIterator.prototype.V$$init$$Ljava$util$HashMap$.call(var0,(th.this$0));
    return var0;
  }

  I$size$$() {
    var th = this;
    return ((th.this$0).size);
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var phi4 = 0;
    if (bytecoder.instanceOf(arg0,java$util$Map$Entry) == 0) {
     return 0;
    } else {
     var0 = arg0;
     var1 = (var0.Ljava$lang$Object$$getKey$$());
     var2 = (th.this$0);
     var3 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$getNode$Ljava$lang$Object$.call(var2,var1));
     If_20_0: {
      If_20_1: {
       if (var3 == null) {
        break If_20_1;
       } else {
        if ((java$util$HashMap$Node.prototype.Z$equals$Ljava$lang$Object$.call(var3,var0)) == 0) {
         break If_20_1;
        } else {
         phi4 = (1) | 0;
         break If_20_0;
        }
       }
      }
      phi4 = (0) | 0;
      break If_20_0;
     }
     return phi4;
    }
  }
}


class java$util$ImmutableCollections$AbstractImmutableList extends java$util$ImmutableCollections$AbstractImmutableCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$AbstractImmutableList,
        'java.util.ImmutableCollections$AbstractImmutableList',
         [java$util$AbstractCollection,java$util$List,java$util$RandomAccess,java$util$Collection,java$util$ImmutableCollections$AbstractImmutableCollection,java$lang$Iterable,java$util$ImmutableCollections$AbstractImmutableList,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$util$ImmutableCollections$AbstractImmutableCollection.prototype.V$$init$$$.call(th);
    return;
  }

  Ljava$lang$Object$$set$I$Ljava$lang$Object$(arg0,arg1) {
    java$util$ImmutableCollections.$i;
    throw bytecoder.registerStack((java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$()), new Error().stack);
  }

  Ljava$util$ListIterator$$listIterator$$() {
    var th = this;
    return (java$util$ImmutableCollections$AbstractImmutableList.prototype.Ljava$util$ListIterator$$listIterator$I.call(th,0));
  }

  Ljava$util$ListIterator$$listIterator$I(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = null;
    var0 = ((th.I$size$$())) | 0;
    If_6_0: {
     if (arg0 < 0) {
      break If_6_0;
     } else {
      if (arg0 <= var0) {
       var1 = new java$util$ImmutableCollections$ListItr();
       java$util$ImmutableCollections$ListItr.prototype.V$$init$$Ljava$util$List$$I$I.call(var1,th,var0,arg0);
       return var1;
      } else {
       break If_6_0;
      }
     }
    }
    throw bytecoder.registerStack((java$util$ImmutableCollections$AbstractImmutableList.prototype.Ljava$lang$IndexOutOfBoundsException$$outOfBounds$I.call(th,arg0)), new Error().stack);
  }

  Ljava$lang$IndexOutOfBoundsException$$outOfBounds$I(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var0 = new java$lang$IndexOutOfBoundsException();
    var1 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var1);
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var1,bytecoder.stringconstants[88]));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var2,arg0));
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var3,bytecoder.stringconstants[89]));
    var5 = ((th.I$size$$())) | 0;
    var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var4,var5));
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var0,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var6)));
    return var0;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var phi3 = 0;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var phi7 = 0;
    if (arg0 != th) {
     if (bytecoder.instanceOf(arg0,java$util$List) != 0) {
      var0 = arg0;
      var1 = (var0.Ljava$util$Iterator$$iterator$$());
      var2 = ((th.I$size$$())) | 0;
      phi3 = (0) | 0;
      L2045978826: while(true) {
       if (phi3 >= var2) {
        If_53_0: {
         if ((var1.Z$hasNext$$()) != 0) {
          phi7 = (0) | 0;
          break If_53_0;
         } else {
          phi7 = (1) | 0;
          break If_53_0;
         }
        }
        return phi7;
       } else {
        If_29_0: {
         if ((var1.Z$hasNext$$()) == 0) {
          break If_29_0;
         } else {
          var4 = (phi3) | 0;
          var5 = (th.Ljava$lang$Object$$get$I(var4));
          var6 = (var1.Ljava$lang$Object$$next$$());
          if ((java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(var5,var6)) != 0) {
           phi3 = ((phi3 + 1)) | 0;
           // Here was a goto statement
           continue L2045978826;
          } else {
           break If_29_0;
          }
         }
        }
        return 0;
       }
      }
     } else {
      return 0;
     }
    } else {
     return 1;
    }
  }

  I$hashCode$$() {
    var th = this;
    var var0 = 0;
    var phi1 = 0;
    var phi2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = null;
    var var6 = 0;
    var0 = ((th.I$size$$())) | 0;
    phi1 = (1) | 0;
    phi2 = (0) | 0;
    L1906689832: while(true) {
     if (phi2 >= var0) {
      return phi1;
     } else {
      var3 = ((31 * phi1)) | 0;
      var4 = (phi2) | 0;
      var5 = (th.Ljava$lang$Object$$get$I(var4));
      var6 = ((var3 + (java$util$Objects.I$hashCode$Ljava$lang$Object$(var5)))) | 0;
      phi2 = ((phi2 + 1)) | 0;
      phi1 = (var6) | 0;
      continue L1906689832;
     }
    }
  }

  Ljava$util$Iterator$$iterator$$() {
    var th = this;
    var var0 = null;
    var0 = new java$util$ImmutableCollections$ListItr();
    java$util$ImmutableCollections$ListItr.prototype.V$$init$$Ljava$util$List$$I.call(var0,th,(th.I$size$$()));
    return var0;
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((th.I$indexOf$Ljava$lang$Object$(arg0)) < 0) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }
}


class java$lang$StringIndexOutOfBoundsException extends java$lang$IndexOutOfBoundsException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$lang$StringIndexOutOfBoundsException,
        'java.lang.StringIndexOutOfBoundsException',
         [java$lang$StringIndexOutOfBoundsException,java$lang$IndexOutOfBoundsException,java$lang$Exception,java$lang$Throwable,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    var th = this;
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(th,arg0);
    return;
  }

  V$$init$$$() {
    var th = this;
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$nio$ReadOnlyBufferException extends java$lang$UnsupportedOperationException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$nio$ReadOnlyBufferException,
        'java.nio.ReadOnlyBufferException',
         [java$lang$Exception,java$nio$ReadOnlyBufferException,java$lang$Throwable,java$lang$UnsupportedOperationException,java$lang$RuntimeException,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    var th = this;
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(th);
    return;
  }
}


class java$io$PrintStream extends java$io$FilterOutputStream {
  nativeObject = null;

  trouble = 0;
  closing = 0;
  autoFlush = 0;
  charset = null;
  charOut = null;
  textOut = null;
  lock = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$io$PrintStream,
        'java.io.PrintStream',
         [java$io$Flushable,java$lang$Appendable,java$io$PrintStream,java$io$Closeable,java$lang$AutoCloseable,java$io$FilterOutputStream,java$lang$Object,java$io$OutputStream]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    var var0 = null;
    var0 = new java$io$PrintStream$1();
    java$io$PrintStream$1.prototype.V$$init$$$.call(var0);
    jdk$internal$access$SharedSecrets.V$setJavaIOCPrintStreamAccess$Ljdk$internal$access$JavaIOPrintStreamAccess$(var0);
    return;
  }

  V$$init$$Ljava$io$OutputStream$(arg0) {
    var th = this;
    java$io$PrintStream.prototype.V$$init$$Ljava$io$OutputStream$$Z.call(th,arg0,0);
    return;
  }

  V$$init$$Ljava$io$OutputStream$$Z(arg0,arg1) {
    var th = this;
    java$io$PrintStream.$i;
    java$io$PrintStream.prototype.V$$init$$Z$Ljava$io$OutputStream$.call(th,arg1,(java$io$PrintStream.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$$Ljava$lang$String$(arg0,bytecoder.stringconstants[61])));
    return;
  }

  static Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$$Ljava$lang$String$(arg0,arg1) {
    var var0 = null;
    if (arg0 != null) {
     return arg0;
    } else {
     var0 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$Ljava$lang$String$.call(var0,arg1);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$$init$$Z$Ljava$io$OutputStream$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    java$io$FilterOutputStream.prototype.V$$init$$Ljava$io$OutputStream$.call(th,arg1);
    var0 = th;
    var0.trouble = 0;
    var1 = th;
    var1.closing = 0;
    var2 = th;
    var2.autoFlush = arg0;
    If_18_0: {
     if (bytecoder.instanceOf(arg1,java$io$PrintStream) == 0) {
      var13 = (java$nio$charset$Charset.Ljava$nio$charset$Charset$$defaultCharset$$());
      phi5 = th;
      phi6 = var13;
      break If_18_0;
     } else {
      var3 = arg1;
      var4 = (java$io$PrintStream.prototype.Ljava$nio$charset$Charset$$charset$$.call(var3));
      phi5 = th;
      phi6 = var4;
      break If_18_0;
     }
    }
    phi5.charset = phi6;
    var7 = th;
    var8 = new java$io$OutputStreamWriter();
    java$io$OutputStreamWriter.prototype.V$$init$$Ljava$io$OutputStream$$Ljava$nio$charset$Charset$.call(var8,th,(th.charset));
    var7.charOut = var8;
    var9 = th;
    var10 = new java$io$BufferedWriter();
    java$io$BufferedWriter.prototype.V$$init$$Ljava$io$Writer$.call(var10,(th.charOut));
    var9.textOut = var10;
    If_51_0: {
     if (((th).constructor.$rt) != java$io$PrintStream.$rt) {
      var12 = th;
      var12.lock = null;
      break If_51_0;
     } else {
      var11 = th;
      jdk$internal$misc$InternalLock.$i;
      var11.lock = (jdk$internal$misc$InternalLock.Ljdk$internal$misc$InternalLock$$newLockOrNull$$());
      break If_51_0;
     }
    }
    return;
  }

  Ljava$nio$charset$Charset$$charset$$() {
    var th = this;
    return (th.charset);
  }
}


class java$util$ImmutableCollections$ListN extends java$util$ImmutableCollections$AbstractImmutableList {
  nativeObject = null;

  elements = null;
  allowNulls = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$ListN,
        'java.util.ImmutableCollections$ListN',
         [java$util$ImmutableCollections$ListN,java$util$AbstractCollection,java$util$List,java$util$RandomAccess,java$util$Collection,java$util$ImmutableCollections$AbstractImmutableCollection,java$io$Serializable,java$lang$Iterable,java$lang$Object,java$util$ImmutableCollections$AbstractImmutableList]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$Ljava$lang$Object$$Z(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$util$ImmutableCollections$AbstractImmutableList.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.elements = arg0;
    var1 = th;
    var1.allowNulls = arg1;
    return;
  }

  I$size$$() {
    var th = this;
    return (th.elements).data.length;
  }

  Ljava$lang$Object$$get$I(arg0) {
    var th = this;
    return ((th.elements).data[arg0]);
  }

  $Ljava$lang$Object$$toArray$$() {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var0 = (th.elements);
    var1 = ((th.elements).data.length) | 0;
    java$util$Arrays.$i;
    return (java$util$Arrays.$Ljava$lang$Object$$copyOf$$Ljava$lang$Object$$I(var0,var1));
  }

  Z$isEmpty$$() {
    var th = this;
    var phi0 = 0;
    If_4_0: {
     if ((th.elements).data.length != 0) {
      phi0 = (0) | 0;
      break If_4_0;
     } else {
      phi0 = (1) | 0;
      break If_4_0;
     }
    }
    return phi0;
  }

  I$indexOf$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var phi2 = 0;
    var var3 = null;
    If_4_0: {
     if ((th.allowNulls) != 0) {
      break If_4_0;
     } else {
      if (arg0 != null) {
       break If_4_0;
      } else {
       var0 = new java$lang$NullPointerException();
       java$lang$NullPointerException.prototype.V$$init$$$.call(var0);
       throw bytecoder.registerStack(var0, new Error().stack);
      }
     }
    }
    var1 = (th.elements);
    phi2 = (0) | 0;
    L183537076: while(true) {
     if (phi2 >= var1.data.length) {
      return -1;
     } else {
      var3 = (var1.data[phi2]);
      if ((java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(arg0,var3)) == 0) {
       phi2 = ((phi2 + 1)) | 0;
       // Here was a goto statement
       continue L183537076;
      } else {
       return phi2;
      }
     }
    }
  }
}


class java$util$ImmutableCollections$List12 extends java$util$ImmutableCollections$AbstractImmutableList {
  nativeObject = null;

  e0 = null;
  e1 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$List12,
        'java.util.ImmutableCollections$List12',
         [java$util$ImmutableCollections$List12,java$util$AbstractCollection,java$util$List,java$util$RandomAccess,java$util$Collection,java$util$ImmutableCollections$AbstractImmutableCollection,java$io$Serializable,java$lang$Iterable,java$lang$Object,java$util$ImmutableCollections$AbstractImmutableList]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$util$ImmutableCollections$AbstractImmutableList.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.e0 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0));
    var1 = th;
    var1.e1 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg1));
    return;
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    java$util$ImmutableCollections$AbstractImmutableList.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.e0 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0));
    var1 = th;
    java$util$ImmutableCollections.$i;
    var1.e1 = (java$util$ImmutableCollections.EMPTY);
    return;
  }

  I$size$$() {
    var th = this;
    var var0 = null;
    var phi1 = 0;
    var0 = (th.e1);
    java$util$ImmutableCollections.$i;
    If_8_0: {
     if (var0 == (java$util$ImmutableCollections.EMPTY)) {
      phi1 = (1) | 0;
      break If_8_0;
     } else {
      phi1 = (2) | 0;
      break If_8_0;
     }
    }
    return phi1;
  }

  Ljava$lang$Object$$get$I(arg0) {
    var th = this;
    var var0 = null;
    if (arg0 != 0) {
     If_9_0: {
      if (arg0 != 1) {
       break If_9_0;
      } else {
       var0 = (th.e1);
       java$util$ImmutableCollections.$i;
       if (var0 == (java$util$ImmutableCollections.EMPTY)) {
        break If_9_0;
       } else {
        return (th.e1);
       }
      }
     }
     throw bytecoder.registerStack((th.Ljava$lang$IndexOutOfBoundsException$$outOfBounds$I(arg0)), new Error().stack);
    } else {
     return (th.e0);
    }
  }

  $Ljava$lang$Object$$toArray$$() {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = (th.e1);
    java$util$ImmutableCollections.$i;
    if (var0 != (java$util$ImmutableCollections.EMPTY)) {
     var2 = bytecoder.newarray((2),null);
     var2.data[0] = (th.e0);
     var2.data[1] = (th.e1);
     return var2;
    } else {
     var1 = bytecoder.newarray((1),null);
     var1.data[0] = (th.e0);
     return var1;
    }
  }

  Z$isEmpty$$() {
    return 0;
  }

  I$indexOf$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0));
    var1 = (th.e0);
    if ((arg0.Z$equals$Ljava$lang$Object$(var1)) == 0) {
     var2 = (th.e1);
     java$util$ImmutableCollections.$i;
     If_22_0: {
      if (var2 == (java$util$ImmutableCollections.EMPTY)) {
       break If_22_0;
      } else {
       var3 = (th.e1);
       if ((arg0.Z$equals$Ljava$lang$Object$(var3)) == 0) {
        break If_22_0;
       } else {
        return 1;
       }
      }
     }
     return -1;
    } else {
     return 0;
    }
  }
}


class java$util$ImmutableCollections$SetN extends java$util$ImmutableCollections$AbstractImmutableSet {
  nativeObject = null;

  size = 0;
  elements = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(
        java$util$ImmutableCollections$SetN,
        'java.util.ImmutableCollections$SetN',
         [java$util$AbstractCollection,java$util$Set,java$util$ImmutableCollections$SetN,java$util$Collection,java$util$ImmutableCollections$AbstractImmutableSet,java$util$ImmutableCollections$AbstractImmutableCollection,java$io$Serializable,java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var var1 = null;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    java$util$ImmutableCollections$AbstractImmutableSet.prototype.V$$init$$$.call(th);
    var0 = th;
    var0.size = arg0.data.length;
    var1 = th;
    var1.elements = bytecoder.newarray(((2 * arg0.data.length)),null);
    phi2 = (0) | 0;
    L1860694088: while(true) {
     if (phi2 >= arg0.data.length) {
      return;
     } else {
      var3 = (arg0.data[phi2]);
      var4 = ((java$util$ImmutableCollections$SetN.prototype.I$probe$Ljava$lang$Object$.call(th,var3))) | 0;
      if (var4 < 0) {
       var9 = (th.elements);
       var10 = ((0 - (var4 + 1))) | 0;
       var9.data[var10] = var3;
       phi2 = ((phi2 + 1)) | 0;
       // Here was a goto statement
       continue L1860694088;
      } else {
       var5 = new java$lang$IllegalArgumentException();
       var6 = new java$lang$StringBuilder();
       java$lang$StringBuilder.prototype.V$$init$$$.call(var6);
       var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var6,bytecoder.stringconstants[70]));
       var8 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var7,var3));
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var5,(java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var8)));
       throw bytecoder.registerStack(var5, new Error().stack);
      }
     }
    }
  }

  I$probe$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var phi4 = 0;
    var0 = ((arg0.I$hashCode$$())) | 0;
    var1 = ((th.elements).data.length) | 0;
    java$lang$Math.$i;
    phi2 = ((java$lang$Math.I$floorMod$I$I(var0,var1))) | 0;
    L1020502733: while(true) {
     var3 = ((th.elements).data[phi2]);
     if (var3 != null) {
      if ((arg0.Z$equals$Ljava$lang$Object$(var3)) == 0) {
       phi2 = ((phi2 + 1)) | 0;
       If_35_0: {
        if (phi2 != (th.elements).data.length) {
         phi4 = (phi2) | 0;
         break If_35_0;
        } else {
         phi4 = (0) | 0;
         break If_35_0;
        }
       }
       phi2 = (phi4) | 0;
       continue L1020502733;
      } else {
       return phi2;
      }
     } else {
      return ((0 - phi2) - 1);
     }
    }
  }

  I$hashCode$$() {
    var th = this;
    var var0 = null;
    var var1 = 0;
    var phi2 = 0;
    var phi3 = 0;
    var var4 = null;
    var var5 = 0;
    var phi6 = 0;
    var0 = (th.elements);
    var1 = (var0.data.length) | 0;
    phi2 = (0) | 0;
    phi3 = (0) | 0;
    L1591117910: while(true) {
     if (phi3 >= var1) {
      return phi2;
     } else {
      var4 = (var0.data[phi3]);
      If_18_0: {
       if (var4 == null) {
        phi6 = (phi2) | 0;
        break If_18_0;
       } else {
        var5 = (phi2) | 0;
        phi6 = ((var5 + (var4.I$hashCode$$()))) | 0;
        break If_18_0;
       }
      }
      phi3 = ((phi3 + 1)) | 0;
      phi2 = (phi6) | 0;
      continue L1591117910;
     }
    }
  }

  Ljava$util$Iterator$$iterator$$() {
    var th = this;
    var var0 = null;
    var0 = new java$util$ImmutableCollections$SetN$SetNIterator();
    java$util$ImmutableCollections$SetN$SetNIterator.prototype.V$$init$$Ljava$util$ImmutableCollections$SetN$.call(var0,th);
    return var0;
  }

  I$size$$() {
    var th = this;
    return (th.size);
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    var th = this;
    var var0 = null;
    var phi1 = 0;
    var0 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0));
    If_8_0: {
     If_8_1: {
      if ((th.size) <= 0) {
       break If_8_1;
      } else {
       if ((java$util$ImmutableCollections$SetN.prototype.I$probe$Ljava$lang$Object$.call(th,arg0)) < 0) {
        break If_8_1;
       } else {
        phi1 = (1) | 0;
        break If_8_0;
       }
      }
     }
     phi1 = (0) | 0;
     break If_8_0;
    }
    return phi1;
  }

  Z$isEmpty$$() {
    var th = this;
    var phi0 = 0;
    If_3_0: {
     if ((th.size) != 0) {
      phi0 = (0) | 0;
      break If_3_0;
     } else {
      phi0 = (1) | 0;
      break If_3_0;
     }
    }
    return phi0;
  }
}

bytecoder.stringconstants[0] = bytecoder.toBytecoderString('null');
bytecoder.stringconstants[1] = bytecoder.toBytecoderString('');
bytecoder.stringconstants[2] = bytecoder.toBytecoderString('makeConcatWithConstants');
bytecoder.stringconstants[3] = bytecoder.toBytecoderString('syntax\u0001');
bytecoder.stringconstants[4] = bytecoder.toBytecoderString('head\u0001');
bytecoder.stringconstants[5] = bytecoder.toBytecoderString('RESET');
bytecoder.stringconstants[6] = bytecoder.toBytecoderString('CODING');
bytecoder.stringconstants[7] = bytecoder.toBytecoderString('CODING_END');
bytecoder.stringconstants[8] = bytecoder.toBytecoderString('FLUSHED');
bytecoder.stringconstants[9] = bytecoder.toBytecoderString('IGNORE');
bytecoder.stringconstants[10] = bytecoder.toBytecoderString('REPLACE');
bytecoder.stringconstants[11] = bytecoder.toBytecoderString('REPORT');
bytecoder.stringconstants[12] = bytecoder.toBytecoderString('Non-positive averageBytesPerChar');
bytecoder.stringconstants[13] = bytecoder.toBytecoderString('Non-positive maxBytesPerChar');
bytecoder.stringconstants[14] = bytecoder.toBytecoderString('averageBytesPerChar exceeds maxBytesPerChar');
bytecoder.stringconstants[15] = bytecoder.toBytecoderString('Null replacement');
bytecoder.stringconstants[16] = bytecoder.toBytecoderString('Empty replacement');
bytecoder.stringconstants[17] = bytecoder.toBytecoderString('Replacement too long');
bytecoder.stringconstants[18] = bytecoder.toBytecoderString('Null action');
bytecoder.stringconstants[19] = bytecoder.toBytecoderString('capacity expected to be negative');
bytecoder.stringconstants[20] = bytecoder.toBytecoderString('capacity < 0: (');
bytecoder.stringconstants[21] = bytecoder.toBytecoderString(' < 0)');
bytecoder.stringconstants[22] = bytecoder.toBytecoderString('newLimit > capacity: (');
bytecoder.stringconstants[23] = bytecoder.toBytecoderString(' > ');
bytecoder.stringconstants[24] = bytecoder.toBytecoderString(')');
bytecoder.stringconstants[25] = bytecoder.toBytecoderString('newLimit expected to be negative');
bytecoder.stringconstants[26] = bytecoder.toBytecoderString('newLimit < 0: (');
bytecoder.stringconstants[27] = bytecoder.toBytecoderString('newPosition > limit: (');
bytecoder.stringconstants[28] = bytecoder.toBytecoderString('newPosition expected to be negative');
bytecoder.stringconstants[29] = bytecoder.toBytecoderString('newPosition < 0: (');
bytecoder.stringconstants[30] = bytecoder.toBytecoderString('mark > position: (');
bytecoder.stringconstants[31] = bytecoder.toBytecoderString('BIG_ENDIAN');
bytecoder.stringconstants[32] = bytecoder.toBytecoderString('LITTLE_ENDIAN');
bytecoder.stringconstants[33] = bytecoder.toBytecoderString('UNDERFLOW');
bytecoder.stringconstants[34] = bytecoder.toBytecoderString('OVERFLOW');
bytecoder.stringconstants[35] = bytecoder.toBytecoderString('MALFORMED');
bytecoder.stringconstants[36] = bytecoder.toBytecoderString('UNMAPPABLE');
bytecoder.stringconstants[37] = bytecoder.toBytecoderString('Current state = ');
bytecoder.stringconstants[38] = bytecoder.toBytecoderString(', new state = ');
bytecoder.stringconstants[39] = bytecoder.toBytecoderString('Non-positive length');
bytecoder.stringconstants[40] = bytecoder.toBytecoderString('apply');
bytecoder.stringconstants[41] = bytecoder.toBytecoderString('checkFromIndexSize');
bytecoder.stringconstants[42] = bytecoder.toBytecoderString('-XX:DumpLoadedClassList=');
bytecoder.stringconstants[43] = bytecoder.toBytecoderString('-XX:+RecordDynamicDumpInfo');
bytecoder.stringconstants[44] = bytecoder.toBytecoderString('-Xshare:');
bytecoder.stringconstants[45] = bytecoder.toBytecoderString('-XX:SharedClassListFile=');
bytecoder.stringconstants[46] = bytecoder.toBytecoderString('-XX:SharedArchiveFile=');
bytecoder.stringconstants[47] = bytecoder.toBytecoderString('-XX:ArchiveClassesAtExit=');
bytecoder.stringconstants[48] = bytecoder.toBytecoderString('void');
bytecoder.stringconstants[49] = bytecoder.toBytecoderString('byte');
bytecoder.stringconstants[50] = bytecoder.toBytecoderString('char');
bytecoder.stringconstants[51] = bytecoder.toBytecoderString('short');
bytecoder.stringconstants[52] = bytecoder.toBytecoderString('int');
bytecoder.stringconstants[53] = bytecoder.toBytecoderString('float');
bytecoder.stringconstants[54] = bytecoder.toBytecoderString('double');
bytecoder.stringconstants[55] = bytecoder.toBytecoderString('long');
bytecoder.stringconstants[56] = bytecoder.toBytecoderString('boolean');
bytecoder.stringconstants[57] = bytecoder.toBytecoderString('Illegal initial capacity: ');
bytecoder.stringconstants[58] = bytecoder.toBytecoderString('Illegal load factor: ');
bytecoder.stringconstants[59] = bytecoder.toBytecoderString('java.awt.graphicsenv');
bytecoder.stringconstants[60] = bytecoder.toBytecoderString('de.mirkosertic.bytecoder.classlib.BytecoderGraphicsEnvironment');
bytecoder.stringconstants[61] = bytecoder.toBytecoderString('Null output stream');
bytecoder.stringconstants[62] = bytecoder.toBytecoderString('charset');
bytecoder.stringconstants[63] = bytecoder.toBytecoderString('jdk.io.useMonitors');
bytecoder.stringconstants[64] = bytecoder.toBytecoderString('true');
bytecoder.stringconstants[65] = bytecoder.toBytecoderString('Wrong init level');
bytecoder.stringconstants[66] = bytecoder.toBytecoderString('system');
bytecoder.stringconstants[67] = bytecoder.toBytecoderString('main');
bytecoder.stringconstants[68] = bytecoder.toBytecoderString('Buffer size <= 0');
bytecoder.stringconstants[69] = bytecoder.toBytecoderString('UTF-8');
bytecoder.stringconstants[70] = bytecoder.toBytecoderString('duplicate element: ');
bytecoder.stringconstants[71] = bytecoder.toBytecoderString('length is odd');
bytecoder.stringconstants[72] = bytecoder.toBytecoderString('duplicate key: ');
bytecoder.stringconstants[73] = bytecoder.toBytecoderString('Range check failed');
bytecoder.stringconstants[74] = bytecoder.toBytecoderString('Range check failed: %s');
bytecoder.stringconstants[75] = bytecoder.toBytecoderString('Range [%s, %<s + %s) out of bounds for length %s');
bytecoder.stringconstants[76] = bytecoder.toBytecoderString('Range [%s, %s) out of bounds for length %s');
bytecoder.stringconstants[77] = bytecoder.toBytecoderString('Index %s out of bounds for length %s');
bytecoder.stringconstants[78] = bytecoder.toBytecoderString('Range check failed: %s %s');
bytecoder.stringconstants[79] = bytecoder.toBytecoderString('checkFromToIndex');
bytecoder.stringconstants[80] = bytecoder.toBytecoderString('checkIndex');
bytecoder.stringconstants[81] = bytecoder.toBytecoderString('[');
bytecoder.stringconstants[82] = bytecoder.toBytecoderString(']');
bytecoder.stringconstants[83] = bytecoder.toBytecoderString('Illegal replacement');
bytecoder.stringconstants[84] = bytecoder.toBytecoderString('\uFFFD');
bytecoder.stringconstants[85] = bytecoder.toBytecoderString('Non-positive averageCharsPerByte');
bytecoder.stringconstants[86] = bytecoder.toBytecoderString('Non-positive maxCharsPerByte');
bytecoder.stringconstants[87] = bytecoder.toBytecoderString('averageCharsPerByte exceeds maxCharsPerByte');
bytecoder.stringconstants[88] = bytecoder.toBytecoderString('Index: ');
bytecoder.stringconstants[89] = bytecoder.toBytecoderString(' Size: ');
bytecoder.stringconstants[90] = bytecoder.toBytecoderString('data type scale not a power of two');
bytecoder.stringconstants[91] = bytecoder.toBytecoderString('Required array length ');
bytecoder.stringconstants[92] = bytecoder.toBytecoderString(' + ');
bytecoder.stringconstants[93] = bytecoder.toBytecoderString(' is too large');
bytecoder.stringconstants[94] = bytecoder.toBytecoderString(', Size: ');
bytecoder.stringconstants[95] = bytecoder.toBytecoderString('[]');
bytecoder.stringconstants[96] = bytecoder.toBytecoderString('(this Collection)');
bytecoder.stringconstants[97] = bytecoder.toBytecoderString('{}');
bytecoder.stringconstants[98] = bytecoder.toBytecoderString('(this Map)');
bytecoder.stringconstants[99] = bytecoder.toBytecoderString('UNKNOWN');
bytecoder.stringconstants[100] = bytecoder.toBytecoderString('No java.util.Objects instances for you!');
bytecoder.stringconstants[101] = bytecoder.toBytecoderString('[pos=');
bytecoder.stringconstants[102] = bytecoder.toBytecoderString(' lim=');
bytecoder.stringconstants[103] = bytecoder.toBytecoderString(' cap=');
bytecoder.stringconstants[104] = bytecoder.toBytecoderString('=');
bytecoder.generated[0] = function(linkArg,dynArg0) {
    let str = '';
    str = str + 's';
    str = str + 'y';
    str = str + 'n';
    str = str + 't';
    str = str + 'a';
    str = str + 'x';
    str = str + dynArg0;
    return bytecoder.toBytecoderString(str);
};
bytecoder.generated[1] = function(linkArg,dynArg0) {
    let str = '';
    str = str + 'h';
    str = str + 'e';
    str = str + 'a';
    str = str + 'd';
    str = str + dynArg0;
    return bytecoder.toBytecoderString(str);
};
bytecoder.exports['setCharArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.V$setCharArrayEntry$$C$I$C;
bytecoder.exports['charArrayLength'] = de$mirkosertic$bytecoder$classlib$Array.I$charArrayLength$$C;
bytecoder.exports['toLong'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Long$$toLong$J;
bytecoder.exports['newCharArray'] = de$mirkosertic$bytecoder$classlib$Array.$C$newCharArray$I;
bytecoder.exports['toFloat'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Float$$toFloat$F;
bytecoder.exports['newObjectArray'] = de$mirkosertic$bytecoder$classlib$Array.$Ljava$lang$Object$$newObjectArray$I;
bytecoder.exports['byteArrayLength'] = de$mirkosertic$bytecoder$classlib$Array.I$byteArrayLength$$B;
bytecoder.exports['main'] = com$example$wasm$WasmBridge.V$main$$Ljava$lang$String$;
bytecoder.exports['newByteArray'] = de$mirkosertic$bytecoder$classlib$Array.$B$newByteArray$I;
bytecoder.exports['toByte'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Byte$$toByte$B;
bytecoder.exports['nullsafeEquals'] = de$mirkosertic$bytecoder$classlib$VM.Z$nullsafeEquals$Ljava$lang$Object$$Ljava$lang$Object$;
bytecoder.exports['toInteger'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Integer$$toInteger$I;
bytecoder.exports['setFileDescriptorHandle'] = java$io$FileDescriptor.prototype.V$setFileDescriptorHandle$I;
bytecoder.exports['toDouble'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Double$$toDouble$F;
bytecoder.exports['getByteArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.B$getByteArrayEntry$$B$I;
bytecoder.exports['getFileDescriptorHandle'] = java$io$FileDescriptor.prototype.I$getFileDescriptorHandle$$;
bytecoder.exports['setByteArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.V$setByteArrayEntry$$B$I$B;
bytecoder.exports['getIntArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.I$getIntArrayEntry$$I$I;
bytecoder.exports['exceptionMessage'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$String$$exceptionMessage$Ljava$lang$Exception$;
bytecoder.exports['objectToString'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$String$$objectToString$Ljava$lang$Object$;
bytecoder.exports['toShort'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Short$$toShort$S;
bytecoder.exports['getCharArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.C$getCharArrayEntry$$C$I;
